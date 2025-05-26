import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import PageNotFound from './components/PageNotFound';
import { StrictMode } from 'react';


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },

]);

const App = () => (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

export default App;