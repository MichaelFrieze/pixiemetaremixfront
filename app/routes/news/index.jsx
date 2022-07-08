import qs from 'qs';
import { useLoaderData, Link, useSubmit, Form } from '@remix-run/react';
import { Redis } from '@upstash/redis';
import { Header, links as headerLinks } from '~/components/header';
import {
  BlogPostsList,
  links as blogPostsListLinks,
} from '~/components/blog-posts-list';
import newsDesktopStyles from '~/styles/desktop/news.css';
import { useEffect, useState } from 'react';
import { redirect } from '@remix-run/node';

export const links = () => [
  {
    rel: 'stylesheet',
    media: '(min-width: 1920px)',
    href: newsDesktopStyles,
  },
  ...headerLinks(),
  ...blogPostsListLinks(),
];

export const action = async ({ request }) => {
  const formData = await request.formData();
  const { blogPostsFilterTag } = Object.fromEntries(formData);

  return redirect(`/news?tag=${blogPostsFilterTag}`);
};

export const loader = async ({ request }) => {
  // Get page from params
  const url = new URL(request.url);
  const start = Number(url.searchParams.get('start') ?? 0);
  const limit = Number(url.searchParams.get('limit') ?? 7);
  let filterTag = url.searchParams.get('tag') ?? null;
  let redisRes = null;
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
    const cacheKey = `/api/blog-posts?pagination={"start":"${start}","limit":"${limit}","withCount":"true"},populate=["image","tags"],sort=["date:desc"]&`;
    redisRes = await redis.get(cacheKey);
  } else {
    // Find the cache key in the Upstash data browser
    const cacheKey = `/api/blog-posts?filters={"tags":{"name":{"$eq":"${filterTag}"}}},pagination={"start":"${start}","limit":"${limit}","withCount":"true"},populate=["image","tags"],sort=["date:desc"]&`;
    redisRes = await redis.get(cacheKey);
  }

  // if the cache is valid, return it
  if (redisRes !== null) {
    console.log('Blog posts cache hit, fetching from Upstash!');

    const redisResObj = JSON.parse(redisRes);
    const cachedLoaderData = {
      paginatedBlogPosts: redisResObj.data.data,
      total: redisResObj.data.meta.pagination.total,
      recentPost: redisResObj.data.data[0],
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

  const loaderData = {
    paginatedBlogPosts: blogPostsResObj.data,
    total: blogPostsResObj.meta.pagination.total,
    recentPost: blogPostsResObj.data[0],
    strapiUrl: process.env.API_URL,
    filterTag,
    upstashURL: `${process.env.UPSTASH_URL}`,
    upstashToken: `${process.env.UPSTASH_TOKEN}`,
  };

  return loaderData;
};

export default function NewsIndexRoute() {
  const {
    recentPost,
    paginatedBlogPosts,
    total,
    strapiUrl,
    filterTag,
    upstashURL,
    upstashToken,
  } = useLoaderData();
  const submit = useSubmit();

  const [tags, setTags] = useState(() => []);

  const date = new Date(recentPost.attributes.date);
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
              <select
                className="news-subheading-filter-dropdown"
                id="blogPostsFilterTag"
                name="blogPostsFilterTag"
                value={filterTag ? filterTag : 'ALL'}
                onChange={updateFilter}
              >
                <option value="ALL">ALL</option>
                {tags.map((tag) => (
                  <option value={tag.attributes.name} key={tag.id}>
                    {tag.attributes.name}
                  </option>
                ))}
              </select>
            </Form>
          </div>

          <div className="news-recent-post-container">
            <div className="news-recent-post-img-container">
              {recentPost.attributes.image?.data?.[0].attributes?.formats
                ?.medium?.url && (
                <img
                  className="news-recent-post-img"
                  srcSet={
                    recentPost.attributes.image.data?.[0].attributes.formats
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
                {recentPost.attributes.title}: {recentPost.attributes.subtitle}
              </div>
              <img
                src="/images/graphics/news-recent-post-line.svg"
                alt="recent post line"
                className="news-recent-post-line-img"
              />
              <Link
                prefetch="intent"
                to="/news"
                className="news-recent-post-link"
              >
                <div className="news-recent-post-link-text">READ BLOG POST</div>
              </Link>
            </div>
          </div>
        </section>

        <BlogPostsList
          key={filterTag}
          filterTag={filterTag}
          paginatedBlogPosts={paginatedBlogPosts}
          totalPosts={total}
        />
      </main>
    </div>
  );
}
