import { Link } from '@remix-run/react';
import newsPaginationDesktopStyles from '~/styles/desktop/news-pagination.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: '(min-width: 1920px)',
    href: newsPaginationDesktopStyles,
  },
];

export function NewsPagination({ page, pageCount }) {
  return (
    <div className="news-index-pagination-container">
      {page > 1 ? (
        <Link
          to={`/news?page=${page - 1}`}
          className="news-index-pagination-link"
          // state={{ disableScroll: true }}
        >
          <button className="news-index-pagination-btn" type="button">
            <img
              srcSet="/images/icons/values-left-arrow.svg"
              alt="left arrow"
              loading="lazy"
            />
          </button>
        </Link>
      ) : (
        <span className="news-index-pagination-link">
          <button
            className="news-index-pagination-disabled-btn"
            type="button"
            disabled
          >
            <img
              srcSet="/images/icons/values-left-arrow-grey.svg"
              alt="left arrow"
              loading="lazy"
            />
          </button>
        </span>
      )}
      {page < pageCount ? (
        <Link
          to={`/news?page=${page + 1}`}
          className="news-index-pagination-link"
          // state={{ disableScroll: true }}
        >
          <button className="news-index-pagination-btn" type="button">
            <img
              srcSet="/images/icons/values-right-arrow.svg"
              alt="right arrow"
              loading="lazy"
            />
          </button>
        </Link>
      ) : (
        <span className="news-index-pagination-link">
          <button
            className="news-index-pagination-disabled-btn"
            type="button"
            disabled
          >
            <img
              srcSet="/images/icons/values-right-arrow-grey.svg"
              alt="right arrow"
              loading="lazy"
            />
          </button>
        </span>
      )}
    </div>
  );
}
