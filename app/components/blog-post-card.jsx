import blogPostCardDesktopStyles from '~/styles/desktop/blog-post-card.css';
import { Link } from '@remix-run/react';

export const links = () => [
  {
    rel: 'stylesheet',
    media: '(min-width: 1920px)',
    href: blogPostCardDesktopStyles,
  },
];

export function BlogPostCard({ blogPost }) {
  const date = new Date(blogPost.attributes.date);
  const dateOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  const dateString = date.toLocaleDateString('en-US', dateOptions);

  return (
    <div className="news-index-blog-post-container">
      <div className="news-index-blog-post-img-container">
        {blogPost.attributes.image?.data?.[0].attributes?.formats?.small
          ?.url && (
          <img
            className="news-index-blog-post-img"
            srcSet={
              blogPost.attributes.image.data?.[0].attributes.formats.small.url
            }
            alt="Recent Post"
          />
        )}
      </div>

      <div className="news-index-blog-post-text-container">
        <div className="news-index-blog-post-date">
          {dateString.toUpperCase()}
        </div>
        <div className="news-index-blog-post-title">
          {blogPost.attributes.title}: {blogPost.attributes.subtitle}
        </div>
        <img
          src="/images/graphics/news-index-blog-post-line.svg"
          alt="blog post line"
          className="news-index-blog-post-line-img"
        />
        <Link
          prefetch="intent"
          to="/news"
          className="news-index-blog-post-link"
        >
          <div className="news-index-blog-post-link-text">Read Blog Post</div>
        </Link>
      </div>
    </div>
  );
}
