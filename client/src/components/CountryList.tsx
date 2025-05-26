import * as Flags from 'country-flag-icons/react/3x2';

import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Skeleton,
  Typography
} from '@mui/material';

import { GET_ALL_COUNTRIES } from '../graphql/queries';
import { GetAllCountriesQuery } from '../gql/graphql';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const CountryList = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery<GetAllCountriesQuery>(GET_ALL_COUNTRIES);

  // Fonction pour convertir le code pays en format compatible avec country-flag-icons
  const getValidCountryCode = (code: string): string => {
    // Convertir en majuscules et prendre les 2 premiers caractères
    return code.toUpperCase().slice(0, 2);
  };

  const hasFlag = (code: string): boolean => {
    const validCode = getValidCountryCode(code);
    return Boolean(Flags[validCode as keyof typeof Flags]);
  };

  if (error) {
    return (
      <Typography color="error" variant="h6" align="center">
        Erreur: {error.message}
      </Typography>
    );
  }

  if (loading) {
    return (
      <Grid container spacing={3}>
        {[...Array(6)].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ height: '100%', backgroundColor: 'background.paper' }}>
              <Skeleton variant="rectangular" height={60} />
              <CardContent>
                <Skeleton variant="text" />
                <Skeleton variant="text" width="60%" />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

  if (!data?.countries || data.countries.length === 0) {
    return (
      <Typography variant="h6" align="center">
        Aucun pays trouvé dans la base de données
      </Typography>
    );
  }

  const countriesWithFlags = data.countries.filter(country => hasFlag(country.code));

  if (countriesWithFlags.length === 0) {
    return (
      <Typography variant="h6" align="center">
        Aucun pays avec drapeau trouvé
      </Typography>
    );
  }

  return (
    <Grid
      container
      spacing={3}
      sx={{
        maxWidth: 1200,
        mx: 'auto',
        px: {
          xs: 2,
          sm: 3,
          md: 4
        }
      }}
    >
      {countriesWithFlags.map((country) => {
        const validCode = getValidCountryCode(country.code);
        const FlagComponent = Flags[validCode as keyof typeof Flags];

        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={country.id}>
            <Card
              sx={{
                height: '100%',
                backgroundColor: 'background.paper',
                transition: 'all 0.3s ease-in-out',
                border: '1px solid',
                borderColor: 'rgba(0, 0, 0, 0.05)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: (theme) => theme.shadows[4],
                  borderColor: 'primary.light',
                  cursor: 'pointer'
                },
              }}
              onClick={() => navigate(`/country/${country.code.toLowerCase()}`)}
            >
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2.5,
                    gap: 2
                  }}
                >
                  <Box
                    sx={{
                      width: '70px',
                      height: '45px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      borderRadius: 1,
                      border: '1px solid',
                      borderColor: 'grey.100',
                    }}
                  >
                    <FlagComponent
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      title={`Drapeau de ${country.name}`}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      flex: 1,
                      fontSize: '1.1rem',
                    }}
                  >
                    {country.name}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                    flexWrap: 'wrap',
                    mt: 2
                  }}
                >
                  <Chip
                    label={country.code}
                    size="small"
                    sx={{
                      backgroundColor: 'primary.dark',
                      color: '#FFFFFF',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                      }
                    }}
                  />
                  {country.continent && (
                    <Chip
                      label={country.continent.name}
                      size="small"
                      sx={{
                        backgroundColor: 'secondary.dark',
                        color: '#FFFFFF',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        '&:hover': {
                          backgroundColor: 'secondary.dark',
                        }
                      }}
                    />
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CountryList; 