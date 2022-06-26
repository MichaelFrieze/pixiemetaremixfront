import { Header, links as headerLinks } from '~/components/header';
import newsIndexDesktopStyles from '~/styles/desktop/news-index.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: '(min-width: 1920px)',
    href: newsIndexDesktopStyles,
  },
  ...headerLinks(),
];

export default function NewsIndexRoute() {
  return (
    <div className="layout-container">
      <Header />
      <main>
        <section className="news-index-heading-section">
          <div className="news-index-heading-container">
            <h1 className="news-index-heading">
              Pixie Meta{' '}
              <span className="news-index-heading-highlight">News</span>
            </h1>
            <div className="news-index-subheading-container">
              <label htmlFor="news-posts-filter">FILTER BY: </label>
              <select
                className="news-index-subheading-filter-dropdown"
                id="news-posts-filter"
                name="news-posts-filter"
              >
                <option value="">NFT’S</option>
              </select>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
