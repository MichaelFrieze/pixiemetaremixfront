import { useFetcher } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  BlogPostCard,
  links as blogPostCardLinks,
} from '~/components/blog-post-card';

export const links = () => [...blogPostCardLinks()];

export function BlogPostsList({
  filterTag,
  paginatedBlogPosts,
  totalPosts,
  loadMoreStart,
  isNewsPage = false,
}) {
  const [blogPosts, setBlogPosts] = useState(() => paginatedBlogPosts);

  const [loadMoreBtnDisabled, setLoadMoreBtnDisabled] = useState(() => false);
  const [start, setStart] = useState(() => loadMoreStart);
  const loadMoreLimit = 2;
  const fetcher = useFetcher();
  let isFetcherLoading = fetcher.state === 'loading';

  const loadMore = () => {
    if (filterTag) {
      fetcher.load(
        `/news?index&start=${start}&limit=${loadMoreLimit}&tag=${filterTag}`
      );
    } else {
      fetcher.load(`/news?index&start=${start}&limit=${loadMoreLimit}`);
    }
    setStart(start + loadMoreLimit);
  };

  useEffect(() => {
    if (fetcher.data) {
      const fetcherData = fetcher.data.paginatedBlogPosts;
      setBlogPosts((prevBlogPosts) => [...prevBlogPosts, ...fetcherData]);
    }
  }, [fetcher.data]);

  useEffect(() => {
    if (blogPosts.length >= totalPosts) {
      setLoadMoreBtnDisabled(true);
    }
  }, [blogPosts, totalPosts]);

  return (
    <section className="news-index-blog-posts-section">
      <div className="news-index-blog-posts-container">
        {isNewsPage
          ? blogPosts.map((blogPost) => (
              <BlogPostCard key={blogPost.id} blogPost={blogPost} />
            ))
          : blogPosts
              .slice(1)
              .map((blogPost) => (
                <BlogPostCard key={blogPost.id} blogPost={blogPost} />
              ))}
      </div>
      <motion.button
        onClick={loadMore}
        disabled={loadMoreBtnDisabled}
        className="news-index-blog-posts-load-more-btn"
        whileHover={{
          scale: 0.98,
        }}
      >
        {loadMoreBtnDisabled
          ? 'No more posts'
          : isFetcherLoading
          ? 'Loading...'
          : 'Load More'}
      </motion.button>
    </section>
  );
}
