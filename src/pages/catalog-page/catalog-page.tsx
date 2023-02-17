import React, { useEffect } from 'react';
import Banner from '../../components/banner/banner';
import CatalogFilters from '../../components/catalog-filters/catalog-filters';
import CatalogSort from '../../components/catalog-sort/catalog-sort';
import Footer from '../../layouts/footer/footer';
import Pagination from '../../components/pagination/pagination';
import ProductCardList from '../../components/product-card-list/product-card-list';
import SvgCollection from '../../components/svg-collection/svg-collection';
import Header from '../../layouts/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCameras, getCamerasByPage } from '../../store/cameras/selectors';
import { useParams } from 'react-router-dom';
import { fetchCamerasByPageAction } from '../../store/cameras/api-actions';
import Breadcrumbs from '../../layouts/breadcrumbs/breadcrumbs';

function CatalogPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const amountOfCameras = useAppSelector(getCameras).length;
  const currentCameras = useAppSelector(getCamerasByPage);
  const { page } = useParams();

  const currentPage = Number(page ? page : 1);

  useEffect(() => {
    dispatch(fetchCamerasByPageAction(currentPage));
  }, [currentPage, dispatch]);

  return (
    <React.Fragment>
      <SvgCollection />
      <div className="wrapper">
        <Header />

        <main>
          <Banner />

          <div className="page-content">
            <Breadcrumbs />

            <section className="catalog">
              <div className="container">
                <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
                <div className="page-content__columns">
                  <div className="catalog__aside">
                    <CatalogFilters />
                  </div>
                  <CatalogSort />
                  <ProductCardList cameras={currentCameras} />

                  <Pagination amountOfCameras={amountOfCameras} currentPage={currentPage} />

                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </React.Fragment>
  );
}

export default CatalogPage;
