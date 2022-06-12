import { Header, links as headerLinks } from '~/components/header';
import { Hero, links as heroLinks } from '~/components/hero';
import indexDesktopStyles from '~/styles/desktop/index.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: 'screen and (min-width: 1920px)',
    href: indexDesktopStyles,
  },
  ...headerLinks(),
  ...heroLinks(),
];

export default function Index() {
  return (
    <div className="layout-container">
      <Header />
      <Hero />
    </div>
  );
}
