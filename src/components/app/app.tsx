import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import { fetchCamerasAction, fetchPromosAction } from '../../store/cameras/api-actions';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCamerasAction());
    dispatch(fetchPromosAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<CatalogPage />}
        />
        <Route
          path={`${AppRoute.Camera}/:id`}
          element={<CatalogPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
