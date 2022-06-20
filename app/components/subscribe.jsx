import subscribeDesktopStyles from '~/styles/desktop/subscribe.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: 'screen and (min-width: 1920px)',
    href: subscribeDesktopStyles,
  },
];

export function Subscribe() {
  return (
    <section className="subscribe-section">
      <div className="subscribe-container">
        <div className="subscribe-text-box">
          <div className="subscribe-heading">GET IN THE LOOP</div>
          <div className="subscribe-description">
            Subscribe the Pixie Meta Family Newsletter and stay up to date with
            our latest news and projects!
          </div>
        </div>

        <form method="post" className="subscribe-form">
          <label htmlFor="subscribe" className="subscribe-label">
            EMAIL
          </label>
          <input
            type="email"
            name="subscribe"
            id="subscribe"
            className="subscribe-input"
            placeholder="EMAIL"
          />
          <button type="submit" className="subscribe-btn">
            SUBSCRIBE
          </button>
        </form>
      </div>

      <div className="subscribe-images-container">
        <img
          className="subscribe-image-butterfly"
          srcSet="/images/graphics/subscribe-butterfly.svg"
          alt="subscribe butterfly"
        />
      </div>
    </section>
  );
}
