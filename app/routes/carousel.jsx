import { Header, links as headerLinks } from '~/components/header';
import { Values, links as valuesLinks } from '~/components/values-temp';

import indexDesktopStyles from '~/styles/desktop/index.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: 'screen and (min-width: 1920px)',
    href: indexDesktopStyles,
  },
  ...headerLinks(),
  ...valuesLinks(),
];

export default function Index() {
  return (
    <div className="layout-container">
      <Header />
      <main>
        <Values />
      </main>
    </div>
  );
}
