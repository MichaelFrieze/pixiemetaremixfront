import { useLoaderData } from '@remix-run/react';
import { Redis } from '@upstash/redis';
import { Header, links as headerLinks } from '~/components/header';
import { BlogPosts, links as blogPostsLinks } from '~/components/blog-posts';
import newsIndexDesktopStyles from '~/styles/desktop/news-index.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: '(min-width: 1920px)',
    href: newsIndexDesktopStyles,
  },
  ...headerLinks(),
  ...blogPostsLinks(),
];

export const loader = async () => {
  const redis = new Redis({
    url: `${process.env.UPSTASH_URL}`,
    token: `${process.env.UPSTASH_TOKEN}`,
  });

  // Find the cache key in the Upstash data browser
  const cacheKey = `/api/blog-posts?populate=image&`;
  const redisRes = await redis.get(cacheKey);

  // if the cache is valid, return it
  if (redisRes) {
    const redisResObj = JSON.parse(redisRes);
    const blogPostsCache = redisResObj.data.data;
    return blogPostsCache;
  }

  console.log('Cache miss, fetching from API');

  // Fetch blog posts
  const res = await fetch(
    `${process.env.API_URL}/api/blog-posts?populate=image`
  );

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

  return loaderData;
};

export default function NewsIndexRoute() {
  const loaderData = useLoaderData();

  return (
    <div className="layout-container">
      <Header />
      <main>
        <section className="news-index-heading-section">
          <div className="news-index-heading-container">
            <h1 className="news-index-heading">
              Pixie Meta{' '}
              <span className="news-index-heading-highlight">News</span>
            </h1>
            <div className="news-index-subheading-container">
              <label htmlFor="blog-posts-filter">FILTER BY: </label>
              <select
                className="news-index-subheading-filter-dropdown"
                id="blog-posts-filter"
                name="blog-posts-filter"
              >
                <option value="">NFT’S</option>
              </select>
            </div>
          </div>
        </section>

        <BlogPosts blogPosts={loaderData} />
      </main>
    </div>
  );
}
