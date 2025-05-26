import { createBrowserRouter } from "react-router";
import App from "./App";
import CountryDetails from "./components/CountryDetails";
import CountriesList from "./components/CountriesList";

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
