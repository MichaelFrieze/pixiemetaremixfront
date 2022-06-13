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
          <img
            className="values-butterfly-image"
            srcSet="/images/graphics/values-butterfly.webp"
            alt="butterfly"
            width={266}
            height={244}
          />

          <div className="values-text-box">
            <h3 className="values-section-title">OUR VALUES</h3>
            <h1 className="values-header-text">
              Committed with{' '}
              <span className="values-header-highlight">Our Community</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
