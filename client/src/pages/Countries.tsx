import { useGetCountriesQuery } from '../types/graphql-generated';
import Card from '../components/Card';
import Header from "../components/Header";
import CreateCountryForm from "../components/CreateCountryForm";

export default function Countries() {
  const { loading, error, data } = useGetCountriesQuery();

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading</p>;
  console.log(data?.countries);
  return (
    <>
      <Header />
      <CreateCountryForm />
      <div className="flex flex-row flex-wrap">
        {data &&
          data?.countries.map((country) => (
            <Card key={country.name} name={country.name} flag={country.emoji} />
          ))}
      </div>
    </>
  );
}
