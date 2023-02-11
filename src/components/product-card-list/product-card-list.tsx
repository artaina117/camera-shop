import { AMOUNT_OF_CARDS_ON_PAGE } from '../../const';
import { Camera } from '../../types/camera';
import ProductCard from '../product-card/product-card';

type ProductCardListProps = {
  cameras: Camera[];
};

function ProductCardList({cameras}: ProductCardListProps): JSX.Element {
  const camerasPerPage: Camera[] = cameras.slice(0, AMOUNT_OF_CARDS_ON_PAGE);

  return (
    <div className="cards catalog__cards">
      {camerasPerPage.map((camera) => <ProductCard camera={camera} key={camera.id} />)}
    </div>
  );
}

export default ProductCardList;
