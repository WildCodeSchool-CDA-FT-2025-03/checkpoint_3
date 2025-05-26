import { createBrowserRouter } from "react-router";
import App from "./App";
import CountryDetails from "./pages/CountryDetails";
import CountriesList from "./pages/CountriesList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/countries",
        element: <CountriesList />,
      },
      {
        path: "/countries/:code",
        element: <CountryDetails />,
      },
    ],
  },
]);

export default router;
