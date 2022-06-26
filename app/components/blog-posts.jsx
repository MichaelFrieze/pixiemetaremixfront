import blogPostsDesktopStyles from '~/styles/desktop/blog-posts.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: '(min-width: 1920px)',
    href: blogPostsDesktopStyles,
  },
];

export function BlogPosts({ blogPosts }) {
  console.log(blogPosts);

  return (
    <section className="blog-posts-section">
      <div className="blog-posts-container">
        {blogPosts.map((blogPost) => (
          <div className="test" key={blogPost.id}>
            {blogPost.attributes.title}
          </div>
        ))}
      </div>
    </section>
  );
}
