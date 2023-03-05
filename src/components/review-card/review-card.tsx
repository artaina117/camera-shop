import { Review } from '../../types/review';
import RatingStars from '../rating-stars/rating-stars';

type ReviewCardProps = {
  currentReview: Review;
};

function ReviewCard({currentReview}: ReviewCardProps): JSX.Element {
  const {userName, advantage, disadvantage, rating, review, createAt} = currentReview;

  const changeDateFormat = (date: string) => {
    const newDate = new Date(Date.parse(date));
    const finalDate = newDate.toLocaleString('ru', { day: 'numeric', month: 'long'});
    return finalDate;
  };

  return (
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{userName}</p>
        <time className="review-card__data" dateTime={createAt}>{changeDateFormat(createAt)}</time>
      </div>
      <div className="rate review-card__rate">
        <RatingStars rating={rating} />
        <p className="visually-hidden">Оценка: {rating}</p>
      </div>
      <ul className="review-card__list">
        <li className="item-list"><span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">{advantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">{disadvantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">{review}</p>
        </li>
      </ul>
    </li>
  );
}

export default ReviewCard;
