import React from 'react';
import { MAX_RATING } from '../../const';

type RatingStarsProps = {
  rating: number;
}

function RatingStars({rating}: RatingStarsProps): JSX.Element {
  const fullStars = Array.from({ length: rating }).map((_, index) => index);

  const emptyStars = Array.from({ length: MAX_RATING - rating }).map((_, index) => index);

  return (
    <React.Fragment>
      {fullStars.map((item) => (
        <svg width="17" height="16" aria-hidden="true" key={item}>
          <use xlinkHref="#icon-full-star"></use>
        </svg>
      ))}
      {emptyStars.map((item) => (
        <svg width="17" height="16" aria-hidden="true" key={item}>
          <use xlinkHref="#icon-star"></use>
        </svg>
      ))}
    </React.Fragment>
  );
}

export default RatingStars;
