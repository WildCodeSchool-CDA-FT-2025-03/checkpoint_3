import { createBrowserRouter } from "react-router";
import App from "../App";
import Detailpays from "../pages/detailpays";
import Listpays from "../pages/listpays";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/detail",
        element: <Detailpays />,
      },
      {
        path: "/liste",
        element: <Listpays />,
      },
    ],
  },
]);
export default router;
