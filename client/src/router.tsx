import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLoayout";
import Home from "./pages/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
    ],
  },
]);