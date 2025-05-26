import { useGetCountriesQuery } from '../types/graphql-generated';
import Card from '../components/Card';

export default function Countries() {
  const { loading, error, data } = useGetCountriesQuery();

    if (error) return <p>Error</p>;
  if (loading) return <p>Loading</p>; 
  console.log(data?.countries)
  return (
    <div className="flex flex-row flex-wrap">
      {data &&
        data?.countries.map((country) => (
          <div>
            <Card name={country.name} flag={country.emoji} />
          </div>
        ))}
    </div>
  );
}
