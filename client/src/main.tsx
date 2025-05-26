import { CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import App from './App';
import CountryPage from './pages/CountryPage';
import { StrictMode } from 'react';
import { apolloClient } from './apollo/client';
import { createRoot } from 'react-dom/client';
import { theme } from './styles/theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <CountryPage /> },
      { path: 'country', element: <CountryPage /> },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ApolloProvider>
  </StrictMode>
);
