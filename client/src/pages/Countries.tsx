import { useGetCountriesQuery } from '../types/graphql-generated';
import Card from "../components/Card";
import CreateCountryForm from "../components/CreateCountryForm";

export default function Countries() {
  const { loading, error, data } = useGetCountriesQuery();

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading</p>;
  console.log(data?.countries);
  return (
    <div className="container mx-auto">
      <CreateCountryForm />
      <div className="flex flex-row flex-wrap m-3">
        {data &&
          data?.countries.map((country) => (
            <a key={country.name} href={`/country/${country.code}`}>
              <Card name={country.name} flag={country.emoji} />
            </a>
          ))}
      </div>
    </div>
  );
}
