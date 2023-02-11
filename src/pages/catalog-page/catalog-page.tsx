import React from 'react';
import Banner from '../../components/banner/banner';
import CatalogFilters from '../../components/catalog-filters/catalog-filters';
import CatalogSort from '../../components/catalog-sort/catalog-sort';
import Footer from '../../layouts/footer/footer';
import Pagination from '../../components/pagination/pagination';
import ProductCardList from '../../components/product-card-list/product-card-list';
import SvgCollection from '../../components/svg-collection/svg-collection';
import Header from '../../layouts/header/header';
import { useAppSelector } from '../../hooks';
import { getCameras } from '../../store/cameras/selectors';

function CatalogPage(): JSX.Element {
  const cameras = useAppSelector(getCameras);

  return (
    <React.Fragment>
      <SvgCollection />
      <div className="wrapper">
        <Header />

        <main>
          <Banner />

          <div className="page-content">
            <div className="breadcrumbs">
              <div className="container">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link" href="index.html">Главная
                      <svg width="5" height="8" aria-hidden="true">
                        <use xlinkHref="#icon-arrow-mini"></use>
                      </svg>
                    </a>
                  </li>
                  <li className="breadcrumbs__item">
                    <span className="breadcrumbs__link breadcrumbs__link--active">Каталог</span>
                  </li>
                </ul>
              </div>
            </div>

            <section className="catalog">
              <div className="container">
                <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
                <div className="page-content__columns">
                  <div className="catalog__aside">
                    <CatalogFilters />
                  </div>
                  <CatalogSort />
                  <ProductCardList cameras={cameras} />

                  <Pagination />

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
