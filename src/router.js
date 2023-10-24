import { createBrowserRouter } from 'react-router-dom';
import { ArtDetails } from './pages/ArtDetails';
import MainPage from './pages/MainPage';
const router = createBrowserRouter([
  {
    path: '/:id',
    element: <ArtDetails />,
  },
  {
    path: '/',
    element: <MainPage />,
  },
]);

export default router;
