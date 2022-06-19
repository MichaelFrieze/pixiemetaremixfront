import { Header, links as headerLinks } from '~/components/header';
import { Hero, links as heroLinks } from '~/components/hero';
import { Values, links as valuesLinks } from '~/components/values';
import { Mission, links as missionLinks } from '~/components/mission';
import { About, links as aboutLinks } from '~/components/about';
import { Careers, links as careersLinks } from '~/components/careers';
import { Team, links as teamLinks } from '~/components/team';

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
  ...aboutLinks(),
  ...careersLinks(),
  ...teamLinks(),
];

export default function Index() {
  return (
    <div className="layout-container">
      <Header />
      <main>
        <Hero />
        <Values />
        <Mission />
        <About />
        <Careers />
        <Team />
      </main>
    </div>
  );
}
