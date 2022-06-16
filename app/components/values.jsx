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
            <div className="values-carousel-item-number">01.</div>
            <div className="values-carousel-item-container">
              <div className="values-carousel-item-heading">
                Experience First
              </div>
              <div className="values-carousel-item-text">
                We believe in building and providing high quality play-to-earn
                games to our community
              </div>
            </div>
          </div>

          <div className="values-carousel-item center">
            <div className="values-carousel-item-number">02.</div>
            <div className="values-carousel-item-container">
              <div className="values-carousel-item-heading">
                Execution is Key
              </div>
              <div className="values-carousel-item-text">
                We believe operational excellence will unlock us to deliver
                better experiences for the long run
              </div>
            </div>
          </div>

          <div className="values-carousel-item">
            <div className="values-carousel-item-number">03.</div>
            <div className="values-carousel-item-container">
              <div className="values-carousel-item-heading">
                Thrive Together
              </div>
              <div className="values-carousel-item-text">
                Our goal is to help you build a career playing our games and
                getting paid for your time.
              </div>
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
      </div>
    </section>
  );
}
