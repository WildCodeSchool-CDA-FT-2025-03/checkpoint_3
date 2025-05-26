import { Box, Button, Container } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import CountryList from '../components/CountryList';
import { useNavigate } from 'react-router-dom';

const CountryPage = () => {
  const navigate = useNavigate();

  return (
    <Container
      component="main"
      sx={{
        flex: 1,
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/country/new')}
        >
          Ajouter un pays
        </Button>
      </Box>
      <CountryList />
    </Container>
  );
};

export default CountryPage; 