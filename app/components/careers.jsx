import careersDesktopStyles from '~/styles/desktop/careers.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: 'screen and (min-width: 1920px)',
    href: careersDesktopStyles,
  },
];

export function Careers() {
  return (
    <section className="careers-section">
      <div className="careers-container">
        <div className="careers-text-box">
          <h2 className="careers-section-title">CAREERS</h2>
          <h1 className="careers-heading">
            We Are <span className="careers-heading-highlight">Hiring!</span>
          </h1>

          <div className="careers-paragraphs">
            <p>
              At Pixie Meta, our people are our greatest strength and we are
              proud to have a diverse team of creators and founders who flourish
              in an environment of personal autonomy, where professional growth
              is encouraged.
            </p>
            <p>
              We value our culture and diversity above all else, regardless of
              where you came from, what you studied, or who you used to work
              for.
            </p>
            <p>
              Team up with Pixie Meta today and start forging your path and
              crafting unforgettable experiences for our community.
            </p>
          </div>

          <a href="mailto:hi@pixiemeta.com" className="careers-contact">
            <p href="mailto:hi@pixiemeta.com" className="careers-contact-email">
              Work at Pixie Meta
            </p>
            <div className="careers-contact-underline">
              <img
                srcSet="/images/graphics/underline-design.svg"
                alt="email underline"
              />
            </div>
          </a>
        </div>

        <div className="careers-iamges-container">
          <img
            className="careers-image-space-ship"
            srcSet="/images/graphics/careers-space-ship.webp"
            alt="careers space ship"
            loading="lazy"
          />
          <img
            className="careers-image-fairy"
            srcSet="/images/graphics/careers-fairy.webp"
            alt="careers fairy"
            loading="lazy"
          />
          <img
            className="careers-image-butterfly"
            srcSet="/images/graphics/careers-butterfly.svg"
            alt="careers butterfly"
            loading="lazy"
          />
          <img
            className="careers-image-planet"
            srcSet="/images/graphics/careers-planet.svg"
            alt="careers planet"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
