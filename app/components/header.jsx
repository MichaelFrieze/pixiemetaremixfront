import { Link } from '@remix-run/react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';
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
          srcSet="/images/logos/logo-header.webp"
          alt="Logo"
          width={376}
          height={87}
        />
      </Link>
      <div>
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
          <Link to="/">Blog</Link>
          <a href="/">Team</a>
          <a href="/">Careers</a>
          <a href="/">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}
