import { createBrowserRouter } from "react-router-dom";


import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import CountryDetails from "./pages/CountryDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <div className="p-4 text-center text-red-600">
        <h1 className="text-xl font-bold">Erreur</h1>
        <p>Une erreur est survenue.</p>
      </div>
    ),
    children: [
      { path: "", element: <Home /> },
      { path: "country/:code", element: <CountryDetails /> },
      {
        path: "*",
        element: (
          <div className="p-4 text-center text-red-600">
            <h1 className="text-xl font-bold">404</h1>
            <p>Page non trouvée</p>
          </div>
        ),
      },
    ],
  },
]);