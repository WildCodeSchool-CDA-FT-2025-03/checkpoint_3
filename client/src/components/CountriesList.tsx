import { Link } from "react-router";
import { useGetCountriesQuery } from "../generated/graphql-types";

function CountriesList() {
  const { data, loading, error } = useGetCountriesQuery();

  console.log(data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul className="container mx-auto flex flex-wrap justify-center gap-4">
      {data?.countries.map((country) => (
        <li key={country.code}>
          <Link to={`/countries/${country.code}`}>
            <div className="w-32 flex flex-col items-center gap-2 px-8 py-4 border rounded-md border-stone-300 bg-stone-100">
              <h2 className="text-center font-semibold text-lg">{country.name}</h2>
              <p className="">{country.emoji}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CountriesList;
