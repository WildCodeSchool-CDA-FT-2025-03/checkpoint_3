import { useGetCountriesQuery } from "../generated/graphql-types";

function CountriesList() {
  const { data, loading, error } = useGetCountriesQuery();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <h1>Countries List</h1>
      <ul>
        {data?.countries.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
    </>
  );
}

export default CountriesList;
