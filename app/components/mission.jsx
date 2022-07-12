import { motion } from 'framer-motion';
import missionDesktopStyles from '~/styles/desktop/mission.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: '(min-width: 1920px)',
    href: missionDesktopStyles,
  },
];

export function Mission() {
  return (
    <section className="mission-section" id="mission-section">
      <div className="mission-container">
        <div className="mission-text-box">
          <div className="mission-section-title">OUR MISSION</div>
          <h1 className="mission-heading">
            To Bring Magic & Fun{' '}
            <span className="mission-heading-highlight">Into Your World</span>
          </h1>
          <div className="mission-paragraphs">
            <p>
              We believe blockchain is the single biggest thing to happen to the
              internet in the last couple of decades because it will reshape how
              we use, work and interact with digital worlds.
            </p>
            <p>
              That’s why we strive to create blockchain-based play-to-earn games
              with a high and positive impact in the community. We aim to create
              digital jobs so you can thrive and have fun from anywhere in the
              world.
            </p>
          </div>
        </div>

        <div className="mission-images-container">
          <motion.img
            className="mission-image-paw"
            srcSet="/images/graphics/mission-paw.webp"
            alt="mission paw"
            loading="lazy"
            width={487}
            height={575}
            whileHover={{
              scale: 1.02,
            }}
          />
          <img
            className="mission-image-book"
            srcSet="/images/graphics/mission-book.webp"
            alt="mission book"
            loading="lazy"
            width={665}
            height={501}
          />
          {/* <motion.img
            className="mission-image-butterfly-1"
            srcSet="/images/graphics/mission-butterfly-1.svg"
            alt="mission butterfly 1"
            loading="lazy"
            whileHover={{
              scale: 1.05,
            }}
          /> */}
          {/* <motion.img
            className="mission-image-butterfly-2"
            srcSet="/images/graphics/mission-butterfly-2.svg"
            alt="mission butterfly 2"
            loading="lazy"
            whileHover={{
              scale: 1.05,
            }}
          /> */}
          {/* <motion.img
            className="mission-image-planet"
            srcSet="/images/graphics/mission-planet.svg"
            alt="mission planet"
            loading="lazy"
            whileHover={{
              scale: 1.05,
            }}
          /> */}
        </div>
      </div>
    </section>
  );
}
