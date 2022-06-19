import teamDesktopStyles from '~/styles/desktop/team.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: 'screen and (min-width: 1920px)',
    href: teamDesktopStyles,
  },
];

export function Team() {
  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-images-container">
          <div className="team-images-large">
            <div className="team-images-ceo">
              <img
                className="team-image-ceo"
                srcSet="/images/team/giancarlo-cappucci.jpg"
                alt=""
              />
              <div className="team-images-ceo-label">
                <p>Giancarlo Cappuccio</p>
                <p>CEO</p>
              </div>
            </div>
            <div className="team-images-cto">
              <img
                className="team-image-cto"
                srcSet="/images/team/danny-ahumada.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="team-images-small">
            <img
              className="team-image-other"
              srcSet="/images/team/ilse-montoya.jpg"
              alt=""
            />
            <img
              className="team-image-other"
              srcSet="/images/team/gianfranco-cappuccio.jpg"
              alt=""
            />
            <img
              className="team-image-other"
              srcSet="/images/team/carlos-bernal.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="team-text-box">
          <div className="team-section-title">MEET</div>
          <div className="team-heading">
            The <span className="team-heading-highlight">Team</span>
          </div>
          <div className="team-paragraphs">
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
        </div>
      </div>

      <div className="team-images-fairy">
        <img
          className="team-image-butterfly-1"
          srcSet="/images/graphics/team-butterfly-1.svg"
          alt="team butterfly 1"
        />
        <img
          className="team-image-butterfly-2"
          srcSet="/images/graphics/team-butterfly-2.svg"
          alt="team butterfly 2"
        />
      </div>
    </section>
  );
}
