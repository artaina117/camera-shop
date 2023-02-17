import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Camera } from '../../types/camera';
import { getPriceWithSpace } from '../../utils';
import RatingStars from '../rating-stars/rating-stars';

type ProductCardProps = {
  camera: Camera;
};

function ProductCard({ camera }: ProductCardProps): JSX.Element {
  const { id, name, price, reviewCount, rating, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x } = camera;

  const priceWithSpace = getPriceWithSpace(price);

  return (
    <div className="product-card">
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`/${previewImgWebp}, /${previewImgWebp2x}`} />
          <img src={`/${previewImg}`} srcSet={`/${previewImg2x} 2x`} width="280" height="240" alt={name} />
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <RatingStars rating={rating} />
          <p className="visually-hidden">Рейтинг: {rating}</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{priceWithSpace} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button">Купить</button>
        <Link className="btn btn--transparent" to={`${AppRoute.Camera}/${id}`}>Подробнее</Link>
      </div>
    </div>
  );
}

export default ProductCard;
