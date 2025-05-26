import { useCountriesQuery } from '../../types/graphql-generated';
import Card from './Card';

export default function ListeCountries() {
  const { data, loading, error } = useCountriesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col items-center p-10 min-h-screen bg-gray-100">
      <ul className="grid gap-4 grid-cols-4">
      {
        data?.countries?.map((country) => (
          <Card
            code={country.code}
            emoji={country.emoji}
            id={country.id}
            name={country.name}
          />
        ))
      }
      </ul>
    </div>
  );
}