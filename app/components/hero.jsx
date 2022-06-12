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
    <section className="section-hero">
      <div className="hero">
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
          <img srcSet="/images/graphics/hat.webp" alt="hat" />
          <img srcSet="/images/graphics/pot.webp" alt="pot" />
        </div>
      </div>
    </section>
  );
}
