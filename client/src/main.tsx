import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';

// Ajout pour Apollo Client
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import HomePage from './page/HomePage/HomePage.tsx';

const dataRouter = [
  {
    path: '/',
    element: <HomePage />,
  },
];

const router = createBrowserRouter([
  {
    element: <App />,
    children: dataRouter,
  },
]);

// Création du client Apollo
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const rootElement = document.getElementById('root');
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>
);
