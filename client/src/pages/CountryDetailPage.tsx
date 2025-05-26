import * as Flags from 'country-flag-icons/react/3x2';

import { Box, Button, Card, CardContent, Container, Skeleton, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { GET_COUNTRY } from '../graphql/queries';
import { GetCountryQuery } from '../gql/graphql';
import { useQuery } from '@apollo/client';

const CountryDetailPage = () => {
  const navigate = useNavigate();
  const { code } = useParams();
  const { loading, error, data } = useQuery<GetCountryQuery>(GET_COUNTRY, {
    variables: { code: code?.toUpperCase() },
  });

  const getValidCountryCode = (code: string): string => {
    return code.toUpperCase().slice(0, 2);
  };

  if (error) {
    return (
      <Container>
        <Typography color="error" variant="h6" align="center">
          Erreur: {error.message}
        </Typography>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container>
        <Skeleton variant="rectangular" height={200} />
        <Skeleton variant="text" height={50} sx={{ mt: 2 }} />
        <Skeleton variant="text" height={30} width="60%" />
      </Container>
    );
  }

  if (!data?.country) {
    return (
      <Container>
        <Typography variant="h6" align="center">
          Pays non trouvé
        </Typography>
      </Container>
    );
  }

  const validCode = getValidCountryCode(data.country.code);
  const FlagComponent = Flags[validCode as keyof typeof Flags];

  return (
    <Container component="main" sx={{ py: 4 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/country')}
        sx={{ mb: 3 }}
        variant="outlined"
      >
        Retour à la liste
      </Button>
      <Card sx={{ maxWidth: 600, mx: 'auto' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 3 }}>
            <Box
              sx={{
                width: '150px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                borderRadius: 1,
                border: '1px solid',
                borderColor: 'grey.200',
              }}
            >
              {FlagComponent && (
                <FlagComponent
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  title={`Drapeau de ${data.country.name}`}
                />
              )}
            </Box>
            <Box>
              <Typography variant="h4" component="h1" gutterBottom>
                {data.country.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Code: {data.country.code}
              </Typography>
              {data.country.continent && (
                <Typography variant="subtitle1" color="text.secondary">
                  Continent: {data.country.continent.name}
                </Typography>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CountryDetailPage; 