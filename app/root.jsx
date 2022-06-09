import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import globalStyles from '~/styles/global.css';

export const links = () => [
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
  },
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/objet/objet-regular.woff',
    type: 'font/woff',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/objet/objet-bold.woff',
    type: 'font/woff',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: globalStyles,
  },
  { rel: 'icon', href: '/favicon.png' },
];

export const meta = () => ({
  charset: 'utf-8',
  title: 'Pixie Meta',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="font-sans">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
