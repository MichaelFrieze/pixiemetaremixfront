import { Link, NavLink } from '@remix-run/react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';
import { motion } from 'framer-motion';
import headerDesktopStyles from '~/styles/desktop/header.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: '(min-width: 1920px)',
    href: headerDesktopStyles,
  },
];

export function Header() {
  return (
    <header className="header-container">
      <Link to="/" prefetch="intent" className="header-logo">
        <img srcSet="/images/logos/logo-header.svg" alt="header logo" />
      </Link>
      <div className="header-nav-container">
        <div className="header-social-btn-container">
          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            className="footer-social-btn"
            target="_blank"
            href="/"
          >
            <FaFacebookF />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            className="footer-social-btn"
            target="_blank"
            href="/"
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            className="footer-social-btn"
            target="_blank"
            href="/"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            className="footer-social-btn"
            target="_blank"
            href="/"
          >
            <BsMedium />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            className="footer-social-btn"
            target="_blank"
            href="/"
          >
            <FaLinkedinIn />
          </motion.a>
        </div>
        <nav className="header-nav-links">
          <NavLink to="#mission-section">Mission</NavLink>
          <NavLink to="#about-section">About Us</NavLink>
          <NavLink to="#team-section">Team</NavLink>
          <NavLink to="#careers-section">Careers</NavLink>
          <NavLink prefetch="intent" to="/">
            News
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
