import qs from 'qs';
import { Outlet, useLoaderData, Link } from '@remix-run/react';
import { Redis } from '@upstash/redis';
import { Header, links as headerLinks } from '~/components/header';
import newsDesktopStyles from '~/styles/desktop/news.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: '(min-width: 1920px)',
    href: newsDesktopStyles,
  },
  ...headerLinks(),
];

export const loader = async () => {
  const redis = new Redis({
    url: `${process.env.UPSTASH_URL}`,
    token: `${process.env.UPSTASH_TOKEN}`,
  });

  // Find the cache key in the Upstash data browser
  const cacheKey = `/api/blog-posts?populate=image,sort=["date:desc"]&`;
  const redisRes = await redis.get(cacheKey);

  // if the cache is valid, return it
  if (redisRes) {
    console.log('Recent post cache hit, fetching from Upstash!');

    const redisResObj = JSON.parse(redisRes);
    const blogPostsCache = redisResObj.data.data;
    const recentPost = blogPostsCache[0];

    return recentPost;
  }

  console.log('Recent post cache miss, fetching from API');

  const query = qs.stringify(
    {
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
  const loaderData = resObj.data;
  const recentPost = loaderData[0];

  return recentPost;
};

export default function NewsRoute() {
  const recentPost = useLoaderData();

  const date = new Date(recentPost.attributes.date);
  const dateOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  const dateString = date.toLocaleDateString('en-US', dateOptions);

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

        <Outlet />
      </main>
    </div>
  );
}
