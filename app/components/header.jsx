import { Link } from '@remix-run/react';
import headerStyles from '~/styles/header.css';

export const links = () => [
  {
    rel: 'stylesheet',
    href: headerStyles,
  },
];

export function Header() {
  return (
    <div className="header-container">
      <Link to="/" prefetch="intent" className="logo">
        <img
          src="/images/logo/logo-header.png"
          alt="logo"
          width={376}
          height={87}
        />
      </Link>
      <div className="social-button"></div>
      <nav className="nav-links"></nav>
    </div>
  );
}
