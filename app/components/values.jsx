import valuesDesktopStyles from '~/styles/desktop/values.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: 'screen and (min-width: 1920px)',
    href: valuesDesktopStyles,
  },
];

export function Values() {
  return (
    <section className="values-section">
      <div className="values-container">
        <div className="values-heading">
          <h3 className="values-section-title">OUR VALUES</h3>
          <h1 className="values-header-text">
            Committed with{' '}
            <span className="values-header-highlight">Our Community</span>
          </h1>
        </div>

        <div className="values-carousel">
          <div className="values-carousel-item">
            <h3 className="values-carousel-item-number">01.</h3>
            <div className="values-carousel-item-container">
              <h2 className="values-carousel-item-heading">Experience First</h2>
              <p className="values-carousel-item-text">
                We believe in building and providing high quality play-to-earn
                games to our community
              </p>
            </div>
          </div>

          <div className="values-carousel-item center">
            <h3 className="values-carousel-item-number">02.</h3>
            <div className="values-carousel-item-container">
              <h2 className="values-carousel-item-heading">Execution is Key</h2>
              <p className="values-carousel-item-text">
                We believe operational excellence will unlock us to deliver
                better experiences for the long run
              </p>
            </div>
          </div>

          <div className="values-carousel-item">
            <h3 className="values-carousel-item-number">03.</h3>
            <div className="values-carousel-item-container">
              <h2 className="values-carousel-item-heading">Thrive Together</h2>
              <p className="values-carousel-item-text">
                Our goal is to help you build a career playing our games and
                getting paid for your time.
              </p>
            </div>
          </div>
        </div>

        <div className="values-carousel-nav-container">
          <a href="/" className="values-carousel-nav-arrow">
            <img
              srcSet="/images/icons/values-left-arrow.svg"
              alt="left arrow"
            />
          </a>
          <a href="/" className="values-carousel-nav-arrow">
            <img
              srcSet="/images/icons/values-right-arrow.svg"
              alt="left arrow"
            />
          </a>
        </div>
      </div>

      <div className="values-images">
        <img
          className="values-planet"
          srcSet="/images/graphics/values-planet.svg"
          alt="values planet"
        />
        <img
          className="values-butterfly-1"
          srcSet="/images/graphics/values-butterfly-1.svg"
          alt="values butterfly 1"
        />
        <img
          className="values-butterfly-2"
          srcSet="/images/graphics/values-butterfly-2.svg"
          alt="values butterfly 2"
        />
        <img
          className="values-boat"
          srcSet="/images/graphics/values-boat.svg"
          alt="values boat"
        />
      </div>
    </section>
  );
}