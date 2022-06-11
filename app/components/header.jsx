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
    <header className="header-container">
      <Link to="/" prefetch="intent" className="logo">
        <img
          src="/images/logos/logo-header.webp"
          alt="logo"
          width={376}
          height={87}
        />
      </Link>
      <div className="social-button"></div>
      <nav className="nav-links">
        <a href="/">Mission</a>
        <a href="/">About Us</a>
        <Link to="/">Blog</Link>
        <a href="/">Team</a>
        <a href="/">Careers</a>
        <a href="/">Contact Us</a>
      </nav>
    </header>
  );
}
