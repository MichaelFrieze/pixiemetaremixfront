import qs from 'qs';
import { useLoaderData } from '@remix-run/react';
import { Redis } from '@upstash/redis';
import newsIndexDesktopStyles from '~/styles/desktop/news-index.css';
import {
  BlogPostCard,
  links as blogPostCardLinks,
} from '~/components/blog-post-card';

export const links = () => [
  {
    rel: 'stylesheet',
    media: '(min-width: 1920px)',
    href: newsIndexDesktopStyles,
  },
  ...blogPostCardLinks(),
];

export const loader = async () => {
  // const redis = new Redis({
  //   url: `${process.env.UPSTASH_URL}`,
  //   token: `${process.env.UPSTASH_TOKEN}`,
  // });

  // // Find the cache key in the Upstash data browser
  // const cacheKey = `/api/blog-posts?populate=image,sort=["date:desc"]&`;
  // const redisRes = await redis.get(cacheKey);

  // // if the cache is valid, return it
  // if (redisRes) {
  //   console.log('Cache hit, fetching from Upstash!');

  //   const redisResObj = JSON.parse(redisRes);
  //   const blogPostsCache = redisResObj.data.data;
  //   const recentPost = blogPostsCache[0];

  //   return recentPost;
  // }

  // console.log('Cache miss, fetching from API');

  const query = qs.stringify(
    {
      pagination: {
        page: 1,
        pageSize: 6,
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
  const paginatedBlogPosts = resObj.data;

  return paginatedBlogPosts;
};

export default function NewsIndexRoute() {
  const paginatedBlogPosts = useLoaderData();

  return (
    <section className="news-index-blog-posts-section">
      <div className="news-index-blog-posts-container">
        {paginatedBlogPosts.map((blogPost) => (
          <BlogPostCard key={blogPost.id} blogPost={blogPost} />
        ))}
      </div>
    </section>
  );
}
