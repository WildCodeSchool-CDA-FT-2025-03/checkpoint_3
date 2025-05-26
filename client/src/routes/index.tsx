import { createBrowserRouter } from "react-router";
import App from "../App";
import Country from "../pages/Country";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/countries/:id",
    element: <Country />,
  },
]);

export default router;
