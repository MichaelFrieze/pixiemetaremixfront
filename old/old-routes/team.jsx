import { useLoaderData } from '@remix-run/react';
import { Redis } from '@upstash/redis';
import { Layout } from '~/components/layout';
import { TeamMember } from '~/components/team-member';

export const loader = async () => {
  const redis = new Redis({
    url: `${process.env.UPSTASH_URL}`,
    token: `${process.env.UPSTASH_TOKEN}`,
  });

  // Find the cache key in the Upstash data browser
  const cacheKey = `/api/team-members?populate=image&`;
  const redisRes = await redis.get(cacheKey);

  // if the cache is valid, return it
  if (redisRes) {
    const redisResObj = JSON.parse(redisRes);
    const teamMembersCache = redisResObj.data.data;
    return teamMembersCache;
  }

  console.log('Cache miss, fetching from API');

  // Fetch team members
  const res = await fetch(
    `${process.env.API_URL}/api/team-members?populate=image`
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

export default function Team() {
  const loaderData = useLoaderData();

  return (
    <>
      <Layout>
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Meet our team
                </h2>
                <p className="text-xl text-gray-500">
                  Ornare sagittis, suspendisse in hendrerit quis. Sed dui
                  aliquet lectus sit pretium egestas vel mattis neque.
                </p>
              </div>
              <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
                {loaderData.map((teamMember) => (
                  <TeamMember key={teamMember.id} teamMember={teamMember} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
