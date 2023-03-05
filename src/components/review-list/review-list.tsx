import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MAX_AMOUNT_OF_REVIEWS } from '../../const';
import { Review } from '../../types/review';
import ReviewCard from '../review-card/review-card';

type ReviewListProps = {
  reviews: Review[];
}

function ReviewList({ reviews }: ReviewListProps): JSX.Element {
  const compareDates = (a: Review, b: Review) => Date.parse(b.createAt) - Date.parse(a.createAt);
  const sortReviews = Array.from(reviews).sort(compareDates);
  const id = useParams();

  const [amountOfReviews, setAmountOfReviews] = useState(MAX_AMOUNT_OF_REVIEWS);
  const [viewMoreButton, setViewMoreButton] = useState(true);

  let currentReviews = sortReviews.slice(0, amountOfReviews);

  const showMoreButtonHandler = () => {
    setAmountOfReviews(amountOfReviews + 3);
  };

  useEffect(() => {
    currentReviews = sortReviews.slice(0, amountOfReviews);
    if (amountOfReviews >= reviews.length) {
      setViewMoreButton(false);
    } else {
      setViewMoreButton(true);
    }
  }, [amountOfReviews, reviews.length]);

  useEffect(() => {
    setAmountOfReviews(MAX_AMOUNT_OF_REVIEWS);
  }, [id]);

  return (
    <div className="page-content__section">
      <section className="review-block">
        <div className="container">
          <div className="page-content__headed">
            <h2 className="title title--h3">Отзывы</h2>
            <button className="btn" type="button">Оставить свой отзыв</button>
          </div>
          <ul className="review-block__list">
            {currentReviews.map((review) => <ReviewCard currentReview={review} key={review.id} />)}
          </ul>
          {viewMoreButton &&
            <div className="review-block__buttons">
              <button className="btn btn--purple" type="button" onClick={showMoreButtonHandler}>Показать больше отзывов
              </button>
            </div>}
        </div>
      </section>
    </div>
  );
}

export default ReviewList;
