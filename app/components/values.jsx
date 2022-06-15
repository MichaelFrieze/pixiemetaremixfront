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
          <div className="values-text-box">
            <h3 className="values-section-title">OUR VALUES</h3>
            <h1 className="values-header-text">
              Committed with{' '}
              <span className="values-header-highlight">Our Community</span>
            </h1>
          </div>
        </div>

        <div className="values-content">
          <div className="values-content-largebox">
            <h1 className="values-largebox-heading">Experience First</h1>
            <p className="values-largebox-text">
              We believe in building and providing high quality play-to-earn
              games to our community.
            </p>
          </div>
          <div className="values-content-smallbox">
            <div className="values-smallbox-images">
              <img
                className="values-smallbox-colorfill-img"
                srcSet="/images/graphics/values-color-fill.webp"
                alt="color fill"
              />
              <img
                className="values-smallbox-object-img"
                srcSet="/images/graphics/values-object.webp"
                alt=""
              />
            </div>
            <div className="values-smallbox-label">
              <h3 className="values-smallbox-text">Thrive Together</h3>
            </div>
          </div>
          <div className="values-content-smallbox">
            <div className="values-smallbox-images">
              <img
                className="values-smallbox-colorfill-img"
                srcSet="/images/graphics/values-color-fill.webp"
                alt="color fill"
              />
              <img
                className="values-smallbox-object-img"
                srcSet="/images/graphics/values-object.webp"
                alt=""
              />
            </div>
            <div className="values-smallbox-label">
              <h3 className="values-smallbox-text">Execution is Key</h3>
            </div>
          </div>
          <div className="values-content-smallbox">
            <div className="values-smallbox-images">
              <img
                className="values-smallbox-colorfill-img"
                srcSet="/images/graphics/values-color-fill.webp"
                alt="color fill"
              />
              <img
                className="values-smallbox-object-img"
                srcSet="/images/graphics/values-object.webp"
                alt=""
              />
            </div>
            <div className="values-smallbox-label">
              <h3 className="values-smallbox-text">Fair Play</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
