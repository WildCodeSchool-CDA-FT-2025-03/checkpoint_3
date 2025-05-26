import { useGetCountriesQuery } from '@/generated/graphql';

const HomePage = () => {
  const { data, loading, error } = useGetCountriesQuery();

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <ul>
      {data?.countries.map((country) => (
        <li key={country.code}>
          {country.emoji} {country.name}
        </li>
      ))}
    </ul>
  );
};

export default HomePage;
