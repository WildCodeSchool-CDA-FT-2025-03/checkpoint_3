import { Box, CircularProgress } from '@mui/material';

import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const App = () => {
  return (
    <Box
      component="div"
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          p: 3,
          flex: 1
        }}
      >
        <Suspense
          fallback={
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="200px"
              role="status"
              aria-label="Chargement des données"
            >
              <CircularProgress />
            </Box>
          }
        >
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
};

export default App;
