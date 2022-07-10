import qs from 'qs';
import { marked } from 'marked';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { redirect } from '@remix-run/node';
import { useLoaderData, useSubmit, Form } from '@remix-run/react';
import { Redis } from '@upstash/redis';
import { Header, links as headerLinks } from '~/components/header';
import {
  BlogPostsList,
  links as blogPostsListLinks,
} from '~/components/blog-posts-list';
import {
  Subscribe,
  links as subscribeLinks,
} from '~/components/subscribe-news';
import { Footer, links as footerLinks } from '~/components/footer-news';

import newsDesktopStyles from '~/styles/desktop/news-page.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: '(min-width: 1920px)',
    href: newsDesktopStyles,
  },
  ...headerLinks(),
  ...blogPostsListLinks(),
  ...subscribeLinks(),
  ...footerLinks(),
];

export const action = async ({ request }) => {
  const formData = await request.formData();
  const { blogPostsFilterTag } = Object.fromEntries(formData);

  return redirect(`/news?tag=${blogPostsFilterTag}`);
};

export const loader = async ({ request, params: { slug } }) => {
  // Get page from params
  const url = new URL(request.url);
  const start = Number(url.searchParams.get('start') ?? 0);
  const limit = Number(url.searchParams.get('limit') ?? 3);
  let filterTag = url.searchParams.get('tag') ?? null;
  let redisRes1 = null;
  let redisRes2 = null;
  let blogPostsQuery;

  if (filterTag === 'ALL') {
    filterTag = null;
  }

  const redis = new Redis({
    url: `${process.env.UPSTASH_URL}`,
    token: `${process.env.UPSTASH_TOKEN}`,
  });

  if (filterTag === null) {
    // Find the cache key in the Upstash data browser
    const cacheKey1 = `/api/blog-posts?pagination={"start":"${start}","limit":"${limit}","withCount":"true"},populate=["image","tags"],sort=["date:desc"]&`;
    redisRes1 = await redis.get(cacheKey1);
  } else {
    // Find the cache key in the Upstash data browser
    const cacheKey1 = `/api/blog-posts?filters={"tags":{"name":{"$eq":"${filterTag}"}}},pagination={"start":"${start}","limit":"${limit}","withCount":"true"},populate=["image","tags"],sort=["date:desc"]&`;
    redisRes1 = await redis.get(cacheKey1);
  }

  const cacheKey2 = `/api/blog-posts?filters={"slug":{"$eq":"${slug}"}},populate=["image","tags"]&`;
  redisRes2 = await redis.get(cacheKey2);

  // if the cache is valid, return it
  if (redisRes1 !== null && redisRes2 !== null) {
    console.log('Blog posts cache hit, fetching from Upstash!');

    const redisRes1Obj = JSON.parse(redisRes1);

    const redisRes2Obj = JSON.parse(redisRes2);
    const blogPost = redisRes2Obj.data.data[0];
    const blogPostContentHTML = marked(blogPost.attributes.content);

    const cachedLoaderData = {
      paginatedBlogPosts: redisRes1Obj.data.data,
      total: redisRes1Obj.data.meta.pagination.total,
      blogPost,
      blogPostContentHTML,
      strapiUrl: process.env.API_URL,
      filterTag,
      upstashURL: `${process.env.UPSTASH_URL}`,
      upstashToken: `${process.env.UPSTASH_TOKEN}`,
    };

    return cachedLoaderData;
  }

  console.log('Blog posts cache miss, fetching from API');

  if (filterTag) {
    blogPostsQuery = qs.stringify(
      {
        filters: {
          tags: {
            name: {
              $eq: `${filterTag}`,
            },
          },
        },
        pagination: {
          start: start,
          limit: limit,
          withCount: true,
        },
        sort: ['date:desc'],
        populate: ['image', 'tags'],
      },
      {
        encodeValuesOnly: true,
      }
    );
  } else {
    blogPostsQuery = qs.stringify(
      {
        pagination: {
          start: start,
          limit: limit,
          withCount: true,
        },
        sort: ['date:desc'],
        populate: ['image', 'tags'],
      },
      {
        encodeValuesOnly: true,
      }
    );
  }

  // Fetch blog posts
  const blogPostsRes = await fetch(
    `${process.env.API_URL}/api/blog-posts?${blogPostsQuery}`
  );

  if (!blogPostsRes.ok) {
    console.error(blogPostsRes);

    const blogPostsResObj = await blogPostsRes.json();
    throw new Error(
      `${blogPostsResObj.error.status} | ${
        blogPostsResObj.error.name
      } | Message: ${blogPostsResObj.error.message} | Details: ${JSON.stringify(
        blogPostsResObj.error.details
      )}`
    );
  }

  const blogPostsResObj = await blogPostsRes.json();

  // Get blog post from slug
  const blogPostQuery = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: ['image', 'tags'],
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  const blogPostRes = await fetch(
    `${process.env.API_URL}/api/blog-posts?${blogPostQuery}`
  );

  if (!blogPostRes.ok) {
    console.error(blogPostRes);

    const blogPostResObj = await blogPostRes.json();
    throw new Error(
      `${blogPostResObj.error.status} | ${
        blogPostResObj.error.name
      } | Message: ${blogPostResObj.error.message} | Details: ${JSON.stringify(
        blogPostResObj.error.details
      )}`
    );
  }

  const blogPostResObj = await blogPostRes.json();

  const blogPost = blogPostResObj.data[0];

  const blogPostContentHTML = marked(blogPost.attributes.content);

  const loaderData = {
    paginatedBlogPosts: blogPostsResObj.data,
    total: blogPostsResObj.meta.pagination.total,
    strapiUrl: process.env.API_URL,
    blogPost,
    blogPostContentHTML,
    filterTag,
    upstashURL: `${process.env.UPSTASH_URL}`,
    upstashToken: `${process.env.UPSTASH_TOKEN}`,
  };

  return loaderData;
};

export default function NewsPageRoute() {
  const {
    blogPost,
    blogPostContentHTML,
    paginatedBlogPosts,
    total,
    strapiUrl,
    filterTag,
    upstashURL,
    upstashToken,
  } = useLoaderData();
  const submit = useSubmit();

  const loadMoreStart = 3;

  const [tags, setTags] = useState(() => []);

  const date = new Date(blogPost.attributes.date);
  const dateOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  const dateString = date.toLocaleDateString('en-US', dateOptions);

  const updateFilter = (e) => {
    submit(e.target.form, { replace: true });
  };

  const fetchTags = async () => {
    const redis = new Redis({
      url: upstashURL,
      token: upstashToken,
    });

    // Find the cache key in the Upstash data browser
    const cacheKey = `/api/tags?&`;
    const redisRes = await redis.get(cacheKey);

    // if the cache is valid, return it
    if (redisRes) {
      const redisResObj = JSON.parse(redisRes);
      const cachedTagsData = redisResObj.data;
      setTags(cachedTagsData.data);
      return;
    }

    console.log('are we here');
    const tagsRes = await fetch(`${strapiUrl}/api/tags`);

    if (!tagsRes.ok) {
      console.error(tagsRes);
      const tagsResObj = await tagsRes.json();
      throw new Error(
        `${tagsResObj.error.status} | ${tagsResObj.error.name} | Message: ${
          tagsResObj.error.message
        } | Details: ${JSON.stringify(tagsResObj.error.details)}`
      );
    }

    const tagsResObj = await tagsRes.json();
    setTags(tagsResObj.data);
  };

  useEffect(() => {
    fetchTags();
  });

  // useEffect(() => {
  //   console.log(blogPost);
  //   console.log(blogPostContentHTML);
  // }, [blogPost, blogPostContentHTML]);

  return (
    <div className="layout-container">
      <Header />
      <main>
        <section className="news-hero-section">
          <div className="news-heading-container">
            <h1 className="news-heading">
              Pixie Meta <span className="news-heading-highlight">News</span>
            </h1>
            <Form
              method="post"
              onChange={updateFilter}
              className="news-subheading-filter"
            >
              <label htmlFor="blogPostsFilterTag">FILTER BY: </label>
              <motion.select
                className="news-subheading-filter-dropdown"
                id="blogPostsFilterTag"
                name="blogPostsFilterTag"
                value={filterTag ? filterTag : 'ALL'}
                onChange={updateFilter}
                whileHover={{
                  scale: 1.01,
                }}
              >
                <option value="ALL">ALL</option>
                {tags.map((tag) => (
                  <option value={tag.attributes.name} key={tag.id}>
                    {tag.attributes.name}
                  </option>
                ))}
              </motion.select>
            </Form>
          </div>

          <div className="news-recent-post-container">
            <div className="news-recent-post-img-container">
              {blogPost.attributes.image?.data?.[0].attributes?.formats?.medium
                ?.url && (
                <img
                  className="news-recent-post-img"
                  srcSet={
                    blogPost.attributes.image.data?.[0].attributes.formats
                      .medium.url
                  }
                  alt="Recent Post"
                />
              )}
            </div>

            <div className="news-recent-post-text-container">
              <div className="news-recent-post-date">
                {dateString.toUpperCase()}
              </div>
              <div className="news-recent-post-title">
                {blogPost.attributes.title}: {blogPost.attributes.subtitle}
              </div>
              <div
                className="news-recent-post-content"
                dangerouslySetInnerHTML={{ __html: blogPostContentHTML }}
              />
            </div>
          </div>

          <div className="news-hero-images">
            <motion.img
              className="news-hero-butterfly-img-1"
              srcSet="/images/graphics/news-butterfly-1.svg"
              alt="news hero butterfly img 1"
              whileHover={{
                scale: 1.05,
              }}
            />
            <motion.img
              className="news-hero-butterfly-img-2"
              srcSet="/images/graphics/news-butterfly-2.svg"
              alt="news hero butterfly img 2"
              whileHover={{
                scale: 1.05,
              }}
            />
          </div>
        </section>

        <BlogPostsList
          key={filterTag}
          filterTag={filterTag}
          paginatedBlogPosts={paginatedBlogPosts}
          totalPosts={total}
          loadMoreStart={loadMoreStart}
        />

        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}
