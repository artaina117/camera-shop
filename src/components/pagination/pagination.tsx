import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AMOUNT_OF_CARDS_ON_PAGE } from '../../const';

type PaginationProps = {
  amountOfCameras: number;
  currentPage: number;
};

function Pagination({ amountOfCameras, currentPage }: PaginationProps): JSX.Element {
  const numberOfPages = Math.ceil(amountOfCameras / AMOUNT_OF_CARDS_ON_PAGE);

  const amountOfPages = Array.from({ length: numberOfPages }).map((_, index) => index + 1);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {currentPage !== 1 && (
          <li className="pagination__item">
            <Link className="pagination__link pagination__link--text" to={`/catalog/page_${currentPage - 1}`}>Назад</Link>
          </li>
        )}
        {amountOfPages.map((page) => (
          <li className="pagination__item" key={page}>
            <Link className={cn('pagination__link', { 'pagination__link--active': currentPage === page })} to={`/catalog/page_${page}`}>{page}</Link>
          </li>
        ))}
        {currentPage !== numberOfPages && (
          <li className="pagination__item">
            <Link className="pagination__link pagination__link--text" to={`/catalog/page_${currentPage + 1}`}>Далее</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Pagination;
