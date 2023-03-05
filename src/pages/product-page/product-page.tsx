import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import RatingStars from '../../components/rating-stars/rating-stars';
import SvgCollection from '../../components/svg-collection/svg-collection';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Footer from '../../layouts/footer/footer';
import Header from '../../layouts/header/header';
import { fetchCurrentCameraAction, fetchSimilarCamerasAction } from '../../store/cameras/api-actions';
import { getCurrentCamera, getSimilarCameras } from '../../store/cameras/selectors';
import { getPriceWithSpace } from '../../utils';
import cn from 'classnames';
import SimilarProducts from '../../components/similar-products/similar-products';
import ReviewList from '../../components/review-list/review-list';
import { AppRoute, TabNames } from '../../const';
import Breadcrumbs from '../../layouts/breadcrumbs/breadcrumbs';
import { fetchReviewsAction } from '../../store/reviews/api-actions';
import { getReviews } from '../../store/reviews/selectors';

type ProductPageProps = {
  tabName: string;
};

function ProductPage({ tabName }: ProductPageProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const currentCamera = useAppSelector(getCurrentCamera);
  const similarCameras = useAppSelector(getSimilarCameras);
  const reviews = useAppSelector(getReviews);
  const { name, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, price, reviewCount, description, rating, vendorCode, type, category, level } = currentCamera;

  const priceWithSpace = getPriceWithSpace(price);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonUpHandler = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollIntoView({behavior: 'smooth'});
    }
  };

  useEffect(() => {
    dispatch(fetchCurrentCameraAction(Number(id)));
    dispatch(fetchSimilarCamerasAction(Number(id)));
    dispatch(fetchReviewsAction(Number(id)));
  }, [id, dispatch]);

  return (
    <React.Fragment>
      <SvgCollection />
      <div className="wrapper" ref={wrapperRef}>
        <Header />

        <main>
          <div className="page-content">
            <Breadcrumbs name={name} />
            <div className="page-content__section">
              <section className="product">
                <div className="container">
                  <div className="product__img">
                    <picture>
                      <source type="image/webp" srcSet={`/${previewImgWebp}, /${previewImgWebp2x}`} />
                      <img src={`/${previewImg}`} srcSet={`/${previewImg2x} 2x`} width="560" height="480" alt="Ретрокамера Das Auge IV" />
                    </picture>
                  </div>
                  <div className="product__content">
                    <h1 className="title title--h3">{name}</h1>
                    <div className="rate product__rate">

                      <RatingStars rating={rating} />

                      <p className="visually-hidden">Рейтинг: {rating}</p>
                      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
                    </div>
                    <p className="product__price"><span className="visually-hidden">Цена:</span>{priceWithSpace} ₽</p>
                    <button className="btn btn--purple" type="button">
                      <svg width="24" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-add-basket"></use>
                      </svg>Добавить в корзину
                    </button>
                    <div className="tabs product__tabs">
                      <div className="tabs__controls product__tabs-controls">
                        <Link className={cn('tabs__control', { 'is-active': tabName === TabNames.Characteristics })} to={`${AppRoute.Camera}/${Number(id)}/characteristics`}>Характеристики</Link>
                        <Link className={cn('tabs__control', { 'is-active': tabName === TabNames.Description })} to={`${AppRoute.Camera}/${Number(id)}/description`}>Описание</Link>
                      </div>
                      <div className="tabs__content">
                        <div className={cn('tabs__element', { 'is-active': tabName === TabNames.Characteristics })}>
                          <ul className="product__tabs-list">
                            <li className="item-list"><span className="item-list__title">Артикул:</span>
                              <p className="item-list__text"> {vendorCode}</p>
                            </li>
                            <li className="item-list"><span className="item-list__title">Категория:</span>
                              <p className="item-list__text">{category}</p>
                            </li>
                            <li className="item-list"><span className="item-list__title">Тип камеры:</span>
                              <p className="item-list__text">{type}</p>
                            </li>
                            <li className="item-list"><span className="item-list__title">Уровень:</span>
                              <p className="item-list__text">{level}</p>
                            </li>
                          </ul>
                        </div>
                        <div className={cn('tabs__element', { 'is-active': tabName === TabNames.Description })}>
                          <div className="product__tabs-text">
                            <p>{description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {similarCameras.length && <SimilarProducts similarCameras={similarCameras} />}
            <ReviewList reviews={reviews} />
          </div>
        </main>
        <button className="up-btn" onClick={buttonUpHandler}>
          <svg width="12" height="18" aria-hidden="true">
            <use xlinkHref="#icon-arrow2"></use>
          </svg>
        </button>

        <Footer />
      </div>
    </React.Fragment>
  );
}

export default ProductPage;
