import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';
import { motion } from 'framer-motion';
import footerDesktopStyles from '~/styles/desktop/footer.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: '(min-width: 1920px)',
    href: footerDesktopStyles,
  },
];

export function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-logo">
          <img
            srcSet="/images/logos/logo-footer.svg"
            alt="footer logo"
            className="footer-image-logo"
            loading="lazy"
          />
        </div>
        <div className="footer-social-btn-container">
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
        <div className="footer-text">
          <p>Copyright © 2022 , Pixie Meta. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
