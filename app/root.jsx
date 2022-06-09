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
