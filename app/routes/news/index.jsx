import { Header, links as headerLinks } from '~/components/header';
import newsIndexDesktopStyles from '~/styles/desktop/news-index.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: '(min-width: 1920px)',
    href: newsIndexDesktopStyles,
  },
  ...headerLinks(),
];

export default function NewsIndexRoute() {
  return (
    <div className="layout-container">
      <Header />
      <main></main>
    </div>
  );
}
