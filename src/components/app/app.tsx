import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, TabNames } from '../../const';
import { useAppDispatch } from '../../hooks';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import ProductPage from '../../pages/product-page/product-page';
import { fetchCamerasAction, fetchPromosAction } from '../../store/cameras/api-actions';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCamerasAction());
    dispatch(fetchPromosAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<CatalogPage />}
        />
        <Route
          path={`${AppRoute.Root}/catalog/page_:page`}
          element={<CatalogPage />}
        />
        <Route
          path={`${AppRoute.Camera}/:id`}
          element={<ProductPage tabName={TabNames.Description} />}
        />
        <Route
          path={`${AppRoute.Camera}/:id/description`}
          element={<ProductPage tabName={TabNames.Description} />}
        />
        <Route
          path={`${AppRoute.Camera}/:id/characteristics`}
          element={<ProductPage tabName={TabNames.Characteristics} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
