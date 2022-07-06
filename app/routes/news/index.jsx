import qs from 'qs';
import { useLoaderData, Link, useFetcher } from '@remix-run/react';
import { Redis } from '@upstash/redis';
import { Header, links as headerLinks } from '~/components/header';
import {
  BlogPostCard,
  links as blogPostCardLinks,
} from '~/components/blog-post-card';
import newsDesktopStyles from '~/styles/desktop/news.css';
import { useEffect, useState } from 'react';

export const links = () => [
  {
    rel: 'stylesheet',
    media: '(min-width: 1920px)',
    href: newsDesktopStyles,
  },
  ...headerLinks(),
  ...blogPostCardLinks(),
];

export const loader = async ({ request }) => {
  // Get page from params
  const url = new URL(request.url);
  const start = Number(url.searchParams.get('start') ?? 0);
  const limit = Number(url.searchParams.get('limit') ?? 7);

  const redis = new Redis({
    url: `${process.env.UPSTASH_URL}`,
    token: `${process.env.UPSTASH_TOKEN}`,
  });

  // Find the cache key in the Upstash data browser
  const cacheKey = `/api/blog-posts?pagination={"start":"${start}","limit":"${limit}","withCount":"true"},populate=image,sort=["date:desc"]&`;
  const redisRes = await redis.get(cacheKey);

  // if the cache is valid, return it
  if (redisRes) {
    console.log('Blog posts cache hit, fetching from Upstash!');

    const redisResObj = JSON.parse(redisRes);

    const cachedLoaderData = {
      paginatedBlogPosts: redisResObj.data.data,
      total: redisResObj.data.meta.pagination.total,
      recentPost: redisResObj.data.data[0],
    };

    return cachedLoaderData;
  }

  console.log('Blog posts cache miss, fetching from API');

  const query = qs.stringify(
    {
      pagination: {
        start: start,
        limit: limit,
        withCount: true,
      },
      sort: ['date:desc'],
      populate: 'image',
    },
    {
      encodeValuesOnly: true,
    }
  );

  // Fetch blog posts
  const res = await fetch(`${process.env.API_URL}/api/blog-posts?${query}`);

  if (!res.ok) {
    console.error(res);

    const resObj = await res.json();
    throw new Error(
      `${resObj.error.status} | ${resObj.error.name} | Message: ${
        resObj.error.message
      } | Details: ${JSON.stringify(resObj.error.details)}`
    );
  }

  const resObj = await res.json();

  const loaderData = {
    paginatedBlogPosts: resObj.data,
    total: resObj.meta.pagination.total,
    recentPost: resObj.data[0],
  };

  return loaderData;
};

export default function NewsIndexRoute() {
  const { recentPost, paginatedBlogPosts, total } = useLoaderData();
  const fetcher = useFetcher();
  let isFetcherLoading = fetcher.state === 'loading';

  const [blogPosts, setBlogPosts] = useState(() => paginatedBlogPosts);
  const [loadMoreBtnDisabled, setLoadMoreBtnDisabled] = useState(() => false);
  const [start, setStart] = useState(() => 7);
  const loadMoreLimit = 2;

  const date = new Date(recentPost.attributes.date);
  const dateOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  const dateString = date.toLocaleDateString('en-US', dateOptions);

  const loadMore = () => {
    fetcher.load(`/news?index&start=${start}&limit=${loadMoreLimit}`);
    setStart(start + loadMoreLimit);
  };

  useEffect(() => {
    if (fetcher.data) {
      const fetcherData = fetcher.data.paginatedBlogPosts;
      setBlogPosts((prevBlogPosts) => [...prevBlogPosts, ...fetcherData]);
    }
  }, [fetcher.data]);

  useEffect(() => {
    if (blogPosts.length >= total) {
      setLoadMoreBtnDisabled(true);
    }
  }, [blogPosts, total]);

  return (
    <div className="layout-container">
      <Header />
      <main>
        <section className="news-hero-section">
          <div className="news-heading-container">
            <h1 className="news-heading">
              Pixie Meta <span className="news-heading-highlight">News</span>
            </h1>
            <div className="news-subheading-container">
              <label htmlFor="blog-posts-filter">FILTER BY: </label>
              <select
                className="news-subheading-filter-dropdown"
                id="blog-posts-filter"
                name="blog-posts-filter"
              >
                <option value="">NFT’S</option>
              </select>
            </div>
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

        <section className="news-index-blog-posts-section">
          <div className="news-index-blog-posts-container">
            {blogPosts.slice(1).map((blogPost) => (
              <BlogPostCard key={blogPost.id} blogPost={blogPost} />
            ))}
          </div>
          <button
            onClick={loadMore}
            disabled={loadMoreBtnDisabled}
            className="news-index-blog-posts-load-more-btn"
          >
            {loadMoreBtnDisabled
              ? 'No more posts'
              : isFetcherLoading
              ? 'Loading...'
              : 'Load More'}
          </button>
        </section>
      </main>
    </div>
  );
}
