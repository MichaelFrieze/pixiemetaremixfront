import { Link } from '@remix-run/react';

export const BlogPostCard = ({ blogPost }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <Link to={`/blog/${blogPost.attributes.slug}`} className="flex-shrink-0">
        {blogPost.attributes.image?.data?.[0].attributes?.formats?.medium
          ?.url && (
          <img
            className="h-48 w-full object-cover"
            srcSet={
              blogPost.attributes.image.data?.[0].attributes.formats.medium.url
            }
            alt=""
          />
        )}
      </Link>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <Link to={`/blog/${blogPost.attributes.slug}`} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">
              {blogPost.attributes.title}
            </p>
            <p className="mt-3 text-base text-gray-500">
              {blogPost.attributes.subtitle}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
