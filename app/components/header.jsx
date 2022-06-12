import { Link } from '@remix-run/react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';
import headerDesktopStyles from '~/styles/desktop/header.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: 'screen and (min-width: 1920px)',
    href: headerDesktopStyles,
  },
];

export function Header() {
  return (
    <header className="header-container">
      <Link to="/" prefetch="intent" className="logo">
        <img
          srcSet="/images/logos/logo-header.webp"
          alt="Logo"
          width={376}
          height={87}
        />
      </Link>
      <div className="nav-container">
        <div className="social-btn-container">
          <a className="social-btn" target="_blank" href="/">
            <FaFacebookF />
          </a>
          <a className="social-btn" target="_blank" href="/">
            <FaTwitter />
          </a>
          <a className="social-btn" target="_blank" href="/">
            <FaInstagram />
          </a>
          <a className="social-btn" target="_blank" href="/">
            <BsMedium />
          </a>
          <a className="social-btn" target="_blank" href="/">
            <FaLinkedin />
          </a>
        </div>
        <nav className="nav-links">
          <a href="/">Mission</a>
          <a href="/">About Us</a>
          <Link prefetch="intent" to="/">
            Blog
          </Link>
          <a href="/">Team</a>
          <a href="/">Careers</a>
          <a href="/">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}