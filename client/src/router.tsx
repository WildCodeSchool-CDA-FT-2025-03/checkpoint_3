import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './page/Home';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/Home',
        element: <Home />,
      }
    ],
  }
]);

export default router;