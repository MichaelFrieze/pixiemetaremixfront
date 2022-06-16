import { Header, links as headerLinks } from '~/components/header';
import { Hero, links as heroLinks } from '~/components/hero';
import { Values, links as valuesLinks } from '~/components/values';
import { Mission, links as missionLinks } from '~/components/mission';
import indexDesktopStyles from '~/styles/desktop/index.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: 'screen and (min-width: 1920px)',
    href: indexDesktopStyles,
  },
  ...headerLinks(),
  ...heroLinks(),
  ...valuesLinks(),
  ...missionLinks(),
];

export default function Index() {
  return (
    <div className="layout-container">
      <Header />
      <main>
        <Hero />
        <Values />
        <Mission />
      </main>
    </div>
  );
}
