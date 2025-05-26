import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from 'react';

const dataRouter = [
  /* {ListDataRouter[0].path} */
    {
        path: "/",
        element: <h1>page</h1>,
    },
]

const router = createBrowserRouter([
    {
     element: <App />,
     children: dataRouter
    },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(document.getElementById('root')!).render(
     <StrictMode>
       <RouterProvider router={router} />
     </StrictMode>
)
