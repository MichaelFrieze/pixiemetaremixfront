import { motion } from 'framer-motion';
import aboutDesktopStyles from '~/styles/desktop/about.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: '(min-width: 1920px)',
    href: aboutDesktopStyles,
  },
];

export function About() {
  return (
    <section className="about-section" id="about-section">
      <div className="about-container">
        <motion.img
          className="about-image-fairy"
          srcSet="/images/graphics/about-large-fairy.webp"
          alt="about fairy"
          loading="lazy"
          whileHover={{
            scale: 1.005,
          }}
        />

        <div className="about-text-box">
          <h2 className="about-section-title">ABOUT US</h2>
          <h1 className="about-heading">Who We Are</h1>
          <div className="about-paragraphs">
            <p>
              Pixie Meta was born with the idea of becoming a game development
              studio whose main goal is to focus on designing and creating
              projects on the Blockchain.
            </p>
            <p>
              Pixie Meta was founded in 2022 by a group of blockchain
              enthusiasts, artists and entrepreneurs with the goal of
              developing, publishing and supporting the most exciting and
              player-focused play-to-earn games in the world to accelerate the
              transition of sustainable jobs in the Metaverse.
            </p>
          </div>
          <motion.a
            href="mailto:hi@pixiemeta.com"
            className="about-contact"
            whileHover={{
              scale: 1.02,
              x: 3,
            }}
          >
            <p className="about-contact-email">hi@pixiemeta.com</p>
            <div className="about-contact-underline">
              <img
                srcSet="/images/graphics/underline-design.svg"
                alt="email underline"
              />
            </div>
          </motion.a>
        </div>

        <div className="about-images-container">
          <motion.img
            className="about-image-butterfly-1"
            srcSet="/images/graphics/about-butterfly-1.svg"
            alt="about butterfly 1"
            loading="lazy"
            whileHover={{
              scale: 1.05,
            }}
          />
          <motion.img
            className="about-image-butterfly-2"
            srcSet="/images/graphics/about-butterfly-2.svg"
            alt="about butterfly 2"
            loading="lazy"
            whileHover={{
              scale: 1.05,
            }}
          />
          <motion.img
            className="about-image-planet"
            srcSet="/images/graphics/about-planet.svg"
            alt="about planet"
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
