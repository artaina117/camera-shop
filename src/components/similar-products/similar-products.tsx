import { useEffect, useState } from 'react';
import { Camera } from '../../types/camera';
import ProductCard from '../product-card/product-card';

type SimilarProductsProps = {
  similarCameras: Camera[];
}

function SimilarProducts({ similarCameras }: SimilarProductsProps): JSX.Element {
  const lastCameraIndex = similarCameras.length - 3;

  const [firstActiveSlideIndex, setFirstActiveSlideIndex] = useState(0);
  const [activationNextButton, setActivationNextButton] = useState(false);
  const [activationPrevButton, setActivationPrevButton] = useState(true);

  const checkActiveCard = (index: number): boolean => {
    if (index === firstActiveSlideIndex || index === firstActiveSlideIndex + 1 || index === firstActiveSlideIndex + 2) {
      return true;
    }
    return false;
  };

  const toNextCardHandler = () => {
    setFirstActiveSlideIndex(firstActiveSlideIndex + 1);
  };

  const toPrevCardHandler = () => {
    setFirstActiveSlideIndex(firstActiveSlideIndex - 1);
  };

  useEffect(() => {
    if (firstActiveSlideIndex === 0) {
      setActivationPrevButton(true);
    } else {
      setActivationPrevButton(false);
    }

    if (firstActiveSlideIndex === lastCameraIndex) {
      setActivationNextButton(true);
    } else {
      setActivationNextButton(false);
    }
  }, [firstActiveSlideIndex, lastCameraIndex]);

  return (
    <div className="page-content__section">
      <section className="product-similar">
        <div className="container">
          <h2 className="title title--h3">Похожие товары</h2>
          <div className="product-similar__slider">
            <div className="product-similar__slider-list">
              {similarCameras.map((camera, index) => {
                const isActive = checkActiveCard(index);
                return <ProductCard camera={camera} isActive={isActive} key={camera.id} />;
              })}
            </div>
            {/* FIXME Из кнопок убран стиль slider-controls, который не давал на них повесить on Click + на последней странице слайдера изменяется размер блока */}
            <button className="slider-controls--prev" type="button" aria-label="Предыдущий слайд" onClick={toPrevCardHandler} disabled={activationPrevButton}>
              <svg width="7" height="12" aria-hidden="true">
                <use xlinkHref="#icon-arrow"></use>
              </svg>
            </button>
            <button className="slider-controls--next" type="button" aria-label="Следующий слайд" onClick={toNextCardHandler} disabled={activationNextButton}>
              <svg width="7" height="12" aria-hidden="true">
                <use xlinkHref="#icon-arrow"></use>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SimilarProducts;
