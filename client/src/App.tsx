import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./components/layout/Layout";
import CountryDetail from "./pages/CountryDetail";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/country/:id",
        element: <CountryDetail />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
