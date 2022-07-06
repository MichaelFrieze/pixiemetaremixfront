import qs from 'qs';
import { useLoaderData } from '@remix-run/react';
import { Redis } from '@upstash/redis';
import newsIndexDesktopStyles from '~/styles/desktop/news-index.css';
import {
  BlogPostCard,
  links as blogPostCardLinks,
} from '~/components/blog-post-card';
import {
  NewsPagination,
  links as newsPaginationLinks,
} from '~/components/news-pagination';
import { useState } from 'react';

export const links = () => [
  {
    rel: 'stylesheet',
    media: '(min-width: 1920px)',
    href: newsIndexDesktopStyles,
  },
  ...blogPostCardLinks(),
  ...newsPaginationLinks(),
];

export const loader = async ({ request }) => {
  // Get page from params
  const url = new URL(request.url);
  const page = Number(url.searchParams.get('page') ?? 1);
  const pageSize = 6;

  const redis = new Redis({
    url: `${process.env.UPSTASH_URL}`,
    token: `${process.env.UPSTASH_TOKEN}`,
  });

  // Find the cache key in the Upstash data browser
  const cacheKey = `/api/blog-posts?pagination={"page":"${page}","pageSize":"${pageSize}","withCount":"true"},populate=image,sort=["date:desc"]&`;
  const redisRes = await redis.get(cacheKey);

  // if the cache is valid, return it
  if (redisRes) {
    console.log('Paginated blog posts cache hit, fetching from Upstash!');

    const redisResObj = JSON.parse(redisRes);

    const cachedLoaderData = {
      paginatedBlogPosts: redisResObj.data.data,
      page: redisResObj.data.meta.pagination.page,
      pageCount: redisResObj.data.meta.pagination.pageCount,
    };

    return cachedLoaderData;
  }

  console.log('Paginated blog posts cache miss, fetching from API');

  const query = qs.stringify(
    {
      pagination: {
        page: page,
        pageSize: pageSize,
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
    page: resObj.meta.pagination.page,
    pageCount: resObj.meta.pagination.pageCount,
  };

  return loaderData;
};

export default function NewsIndexRoute() {
  const { paginatedBlogPosts, page, pageCount } = useLoaderData();
  const [blogPosts, setBlogPosts] = useState(paginatedBlogPosts);

  return (
    <section className="news-index-blog-posts-section">
      <div className="news-index-blog-posts-container">
        {blogPosts.map((blogPost) => (
          <BlogPostCard key={blogPost.id} blogPost={blogPost} />
        ))}
      </div>
      <NewsPagination page={page} pageCount={pageCount} />
    </section>
  );
}
