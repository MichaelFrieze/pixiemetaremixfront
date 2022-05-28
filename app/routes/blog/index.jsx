import { useLoaderData, Link } from '@remix-run/react';
import { Layout } from '~/components/layout';

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
  console.log(loaderData);

  return loaderData;
};

export default function BlogIndex() {
  const loaderData = useLoaderData();
  console.log(loaderData);

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
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=7qwKjEp7Xv&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <Link to="/blog/dynamicroute" className="hover:underline">
                        Article
                      </Link>
                    </p>
                    <Link to="/blog/dynamicroute" className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        Boost your conversion rate
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto accusantium praesentium eius, ut atque fuga
                        culpa, similique sequi cum eos quis dolorum.
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=7qwKjEp7Xv&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <Link to="/blog/dynamicroute" className="hover:underline">
                        Video
                      </Link>
                    </p>
                    <Link to="/blog/dynamicroute" className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        How to use search engine optimization to drive sales
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit facilis asperiores porro quaerat doloribus,
                        eveniet dolore. Adipisci tempora aut inventore optio
                        animi., tempore temporibus quo laudantium.
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixqx=7qwKjEp7Xv&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <Link to="/blog/dynamicroute" className="hover:underline">
                        Case Study
                      </Link>
                    </p>
                    <Link to="/blog/dynamicroute" className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        Improve your customer experience
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint harum rerum voluptatem quo recusandae magni placeat
                        saepe molestiae, sed excepturi cumque corporis
                        perferendis hic.
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
