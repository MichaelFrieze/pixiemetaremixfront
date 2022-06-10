import { Header, links as headerLinks } from '~/components/header';
import indexStyles from '~/styles/index.css';

export const links = () => [
  {
    rel: 'stylesheet',
    href: indexStyles,
  },
  ...headerLinks(),
];

export default function IndexRoute() {
  return (
    <div>
      <Header />
    </div>
  );
}
