import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';
import footerDesktopStyles from '~/styles/desktop/footer.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: 'screen and (min-width: 1920px)',
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
          />
        </div>
        <div className="footer-social-btn-container">
          <a className="footer-social-btn" target="_blank" href="/">
            <FaFacebookF />
          </a>
          <a className="footer-social-btn" target="_blank" href="/">
            <FaTwitter />
          </a>
          <a className="footer-social-btn" target="_blank" href="/">
            <FaInstagram />
          </a>
          <a className="footer-social-btn" target="_blank" href="/">
            <BsMedium />
          </a>
          <a className="footer-social-btn" target="_blank" href="/">
            <FaLinkedinIn />
          </a>
        </div>
        <div className="footer-text">
          <p>Copyright © 2022 , Pixie Meta. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
