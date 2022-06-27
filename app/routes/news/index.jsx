import { useLoaderData } from '@remix-run/react';
import { Redis } from '@upstash/redis';
import newsIndexDesktopStyles from '~/styles/desktop/news-index.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: '(min-width: 1920px)',
    href: newsIndexDesktopStyles,
  },
];

export const loader = async () => {
  return 'Hello World';
};

export default function NewsIndexRoute() {
  const loaderData = useLoaderData();

  return (
    <>
      <div></div>
    </>
  );
}
