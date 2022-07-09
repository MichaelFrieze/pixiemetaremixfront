import { motion } from 'framer-motion';
import subscribeDesktopStyles from '~/styles/desktop/subscribe-news.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: '(min-width: 1920px)',
    href: subscribeDesktopStyles,
  },
];

export function Subscribe() {
  return (
    <section className="subscribe-section">
      <div className="subscribe-container">
        <div className="subscribe-text-box">
          <div className="subscribe-heading">GET IN THE LOOP</div>
          <div className="subscribe-description">
            Subscribe the Pixie Meta Family Newsletter and stay up to date with
            our latest news and projects!
          </div>
        </div>

        <form method="post" className="subscribe-form">
          <label htmlFor="subscribe" className="subscribe-label">
            EMAIL
          </label>
          <input
            type="email"
            name="subscribe"
            id="subscribe"
            className="subscribe-input"
            placeholder="EMAIL"
          />
          <motion.button
            whileHover={{
              scale: 0.99,
            }}
            type="submit"
            className="subscribe-btn"
          >
            SUBSCRIBE
          </motion.button>
        </form>
      </div>

      <div className="news-subscribe-images">
        <img
          className="news-subscribe-butterfly-img-1"
          srcSet="/images/graphics/news-butterfly-3.svg"
          alt="news subscribe butterfly img 1"
        />
        <img
          className="news-subscribe-butterfly-img-2"
          srcSet="/images/graphics/news-butterfly-4.svg"
          alt="news subscribe butterfly img 2"
        />
      </div>
    </section>
  );
}
