import { motion } from 'framer-motion';
import heroDesktopStyles from '~/styles/desktop/hero.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: '(min-width: 1920px)',
    href: heroDesktopStyles,
  },
];

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text-box">
          <h1 className="hero-heading">
            Bringing <span className="hero-heading-highlight">Magic</span> to
            Everyone’s Life on the Blockchain
          </h1>
          <p className="hero-description-first">
            Pixie Meta builds Virtual Magical Worlds to deliver the ultimate
            blockchain-based experience where you can work, live, play and
            materialize your dreams in the real world while having fun!
          </p>
          <p className="hero-description-second">
            We Build Characters, Worlds and Games to Make the Metaverse a Better
            Place… And We Do It With Our Community.
          </p>
        </div>

        <div className="hero-images">
          <img
            className="hero-hat"
            srcSet="/images/graphics/hero-magic-hat.webp"
            alt="hero hat"
            loading="lazy"
          />
          <motion.img
            className="hero-pot"
            srcSet="/images/graphics/hero-pot.webp"
            alt="hero pot"
            whileHover={{
              scale: 1.01,
            }}
          />
          <motion.img
            className="hero-green-bubble-1"
            srcSet="/images/graphics/hero-green-bubble-1.svg"
            alt="hero green bubble 1"
            whileHover={{
              scale: 1.05,
            }}
          />
          <motion.img
            className="hero-green-bubble-2"
            srcSet="/images/graphics/hero-green-bubble-2.svg"
            alt="hero green bubble 2"
            whileHover={{
              scale: 1.05,
            }}
          />
          <motion.img
            className="hero-butterfly-1"
            srcSet="/images/graphics/hero-butterfly-1.svg"
            alt="hero butterfly 1"
            whileHover={{
              scale: 1.05,
            }}
          />
          <motion.img
            className="hero-butterfly-2"
            srcSet="/images/graphics/hero-butterfly-2.svg"
            alt="hero butterfly 2"
            loading="lazy"
            whileHover={{
              scale: 1.05,
            }}
          />
          <motion.img
            className="hero-butterfly-3"
            srcSet="/images/graphics/hero-butterfly-3.svg"
            alt="hero butterfly 3"
            loading="lazy"
            whileHover={{
              scale: 1.05,
            }}
          />
          <motion.img
            className="hero-butterfly-4"
            srcSet="/images/graphics/hero-butterfly-4.svg"
            alt="hero butterfly 4"
            loading="lazy"
            whileHover={{
              scale: 1.05,
            }}
          />
        </div>
      </div>
    </section>
  );
}
