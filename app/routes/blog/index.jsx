import { useLoaderData } from '@remix-run/react';
import { Layout } from '~/components/layout';
import { BlogPostCard } from '~/components/blog-post-card';

export const loader = async ({ request }) => {
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

export default function BlogIndex() {
  const loaderData = useLoaderData();

  return (
    <>
      <Layout>
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3"></div>
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                From the blog
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                libero labore natus atque, ducimus sed.
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {loaderData.map((blogPost) => (
                <BlogPostCard key={blogPost.id} blogPost={blogPost} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
