import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './page/Home';
import Detail from './page/Detail';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/Home',
        element: <Home />,
      },
      {
        path: '/Details/:code',
        element: <Detail />,
      }
    ],
  }
]);

export default router;