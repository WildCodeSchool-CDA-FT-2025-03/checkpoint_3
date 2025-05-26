import { Container } from '@mui/material';
import CountryList from '../components/CountryList';

const CountryPage = () => {
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
      <CountryList />
    </Container>
  );
};

export default CountryPage; 