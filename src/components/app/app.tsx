import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import { fetchCamerasAction } from '../../store/cameras/api-actions';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCamerasAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <CatalogPage />;
}

export default App;
