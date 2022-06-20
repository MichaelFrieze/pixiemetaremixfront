import heroDesktopStyles from '~/styles/desktop/hero.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: 'screen and (min-width: 1920px)',
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
            srcSet="/images/graphics/hero-magic-hat.svg"
            alt="hero hat"
          />
          <img
            className="hero-pot"
            srcSet="/images/graphics/hero-pot.svg"
            alt="hero pot"
          />
          <img
            className="hero-green-bubble-1"
            srcSet="/images/graphics/hero-green-bubble-1.svg"
            alt="hero green bubble 1"
          />
          <img
            className="hero-green-bubble-2"
            srcSet="/images/graphics/hero-green-bubble-2.svg"
            alt="hero green bubble 2"
          />
          <img
            className="hero-butterfly-1"
            srcSet="/images/graphics/hero-butterfly-1.svg"
            alt="hero butterfly 1"
          />
          <img
            className="hero-butterfly-2"
            srcSet="/images/graphics/hero-butterfly-2.svg"
            alt="hero butterfly 2"
          />
          <img
            className="hero-butterfly-3"
            srcSet="/images/graphics/hero-butterfly-3.svg"
            alt="hero butterfly 3"
          />
          <img
            className="hero-butterfly-4"
            srcSet="/images/graphics/hero-butterfly-4.svg"
            alt="hero butterfly 4"
          />
          <img
            className="hero-butterfly-5"
            srcSet="/images/graphics/hero-butterfly-5.svg"
            alt="hero butterfly 5"
          />
        </div>
      </div>
    </section>
  );
}
