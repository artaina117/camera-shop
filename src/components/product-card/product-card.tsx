import { useState } from 'react';
import { MAX_RATING } from '../../const';
import { Camera } from '../../types/camera';
import { getPriceWithSpace } from '../../utils';

type ProductCardProps = {
  camera: Camera;
};

function ProductCard({ camera }: ProductCardProps): JSX.Element {
  const { name, price, reviewCount, rating, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x } = camera;

  const priceWithSpace = getPriceWithSpace(price);

  const [fullStars] = useState(Array.from({ length: rating }).map((item, index) => index));

  const [emptyStars] = useState(Array.from({ length: MAX_RATING - rating }).map((item, index) => index));

  return (
    <div className="product-card">
      <div className="product-card__img">
        <picture>
          <source type={previewImgWebp} srcSet={`${previewImgWebp}, ${previewImgWebp2x}`} />
          <img src={previewImg} srcSet={previewImg2x} width="280" height="240" alt={name} />
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
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
          <p className="visually-hidden">Рейтинг: {rating}</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{priceWithSpace} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button">Купить</button>
        <a className="btn btn--transparent" href="#">Подробнее</a>
      </div>
    </div>
  );
}

export default ProductCard;
