import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import PublicIcon from '@mui/icons-material/Public';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'primary.main',
          boxShadow: 2,
        }}
      >
        <Toolbar>
          <PublicIcon sx={{ mr: 2 }} />
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'white',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
            }}
          >
            Les drapeaux en s'amusant
          </Typography>
        </Toolbar>
      </AppBar>

      {children}
    </Box>
  );
};

export default Layout; 