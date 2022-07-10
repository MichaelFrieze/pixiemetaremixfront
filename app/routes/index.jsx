import { Header, links as headerLinks } from '~/components/header';
import { Hero, links as heroLinks } from '~/components/hero';
import { Values, links as valuesLinks } from '~/components/values';
import { Mission, links as missionLinks } from '~/components/mission';
import { About, links as aboutLinks } from '~/components/about';
import { Careers, links as careersLinks } from '~/components/careers';
import { Team, links as teamLinks } from '~/components/team';
import { Subscribe, links as subscribeLinks } from '~/components/subscribe';
import { Footer, links as footerLinks } from '~/components/footer';

import indexDesktopStyles from '~/styles/desktop/index.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: '(min-width: 1440px)',
    href: indexDesktopStyles,
  },
  ...headerLinks(),
  ...heroLinks(),
  ...valuesLinks(),
  ...missionLinks(),
  ...aboutLinks(),
  ...careersLinks(),
  ...teamLinks(),
  ...subscribeLinks(),
  ...footerLinks(),
];

export default function IndexRoute() {
  return (
    <div className="layout-container">
      <Header />
      <main>
        <Hero />
        {/* <Values /> */}
        {/* <Mission /> */}
        {/* <About /> */}
        {/* <Careers /> */}
        {/* <Team /> */}
        {/* <Subscribe /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
