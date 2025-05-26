import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Countries from "./pages/Countries";
import Country from "./pages/Country";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Countries />,
      },
      {
        path: "/country/:id",
        element: <Country />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
