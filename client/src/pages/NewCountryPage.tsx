import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { CREATE_COUNTRY, GET_ALL_CONTINENTS, GET_ALL_COUNTRIES } from '../graphql/queries';
import { useMutation, useQuery } from '@apollo/client';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const NewCountryPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    emoji: '',
    continentId: ''
  });
  const [error, setError] = useState<string | null>(null);

  const { data: continentsData, loading: continentsLoading } = useQuery(GET_ALL_CONTINENTS);

  const [createCountry, { loading }] = useMutation(CREATE_COUNTRY, {
    refetchQueries: [{ query: GET_ALL_COUNTRIES }],
    onCompleted: () => {
      navigate('/country');
    },
    onError: (error) => {
      setError(error.message);
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name || !formData.code || !formData.emoji || !formData.continentId) {
      setError('Tous les champs sont requis');
      return;
    }

    try {
      await createCountry({
        variables: {
          data: {
            name: formData.name,
            code: formData.code.toUpperCase(),
            emoji: formData.emoji,
            continent: {
              id: parseInt(formData.continentId)
            }
          }
        }
      });
    } catch (err) {
      // L'erreur sera gérée par onError dans useMutation
    }
  };

  return (
    <Container component="main" maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/country')}
          sx={{ mb: 2 }}
        >
          Retour à la liste
        </Button>
        <Typography variant="h4" component="h1" gutterBottom>
          Ajouter un nouveau pays
        </Typography>
      </Box>

      <Paper elevation={2} sx={{ p: 4 }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <TextField
              label="Nom du pays"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              fullWidth
              required
              variant="outlined"
            />

            <TextField
              label="Code du pays (2 lettres)"
              value={formData.code}
              onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
              fullWidth
              required
              inputProps={{ maxLength: 2 }}
              helperText="Ex: FR pour France"
              variant="outlined"
            />

            <TextField
              label="Emoji du drapeau"
              value={formData.emoji}
              onChange={(e) => setFormData({ ...formData, emoji: e.target.value })}
              fullWidth
              required
              helperText="Ex: 🇫🇷"
              variant="outlined"
            />

            <FormControl fullWidth required>
              <InputLabel id="continent-label">Continent</InputLabel>
              <Select
                labelId="continent-label"
                value={formData.continentId}
                label="Continent"
                onChange={(e) => setFormData({ ...formData, continentId: e.target.value })}
                disabled={continentsLoading}
              >
                {continentsData?.continents.map((continent: { id: number; name: string }) => (
                  <MenuItem key={continent.id} value={continent.id}>
                    {continent.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
              <Button
                variant="outlined"
                onClick={() => navigate('/country')}
              >
                Annuler
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={loading || continentsLoading}
              >
                {loading ? 'Création...' : 'Créer le pays'}
              </Button>
            </Box>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default NewCountryPage; 