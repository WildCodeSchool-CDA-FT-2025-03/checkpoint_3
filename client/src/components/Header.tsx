import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import bbtFlag from '../assets/bbt_flag.jpg';

const Header = () => (
  <AppBar
    position="static"
    elevation={0}
    sx={{
      backgroundColor: 'grey.100',
      borderBottom: '1px solid',
      borderColor: 'grey.300',
      py: 1.5,
    }}
  >
    <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto' }}>
      <Box
        component="img"
        src={bbtFlag}
        alt="BBT Flag"
        sx={{
          height: 45,
          width: 68,
          mr: 3,
          borderRadius: 1,
          border: '1px solid',
          borderColor: 'grey.200',
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
        }}
      />
      <Typography
        variant="h4"
        component="h1"
        sx={{
          flexGrow: 1,
          color: 'grey.900',
          fontWeight: 700,
          letterSpacing: '-0.5px',
          fontSize: {
            xs: '1.5rem',
            sm: '2rem',
            md: '2.25rem',
          }
        }}
      >
        Les drapeaux en s'amusant
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header; 