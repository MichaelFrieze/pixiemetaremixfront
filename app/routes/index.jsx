import { Header, links as headerLinks } from '~/components/header';
import indexDesktopStyles from '~/styles/desktop/index.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: 'screen and (min-width: 1920px)',
    href: indexDesktopStyles,
  },
  ...headerLinks(),
];

export default function IndexRoute() {
  return (
    <div className="layout-container">
      <Header />
    </div>
  );
}
