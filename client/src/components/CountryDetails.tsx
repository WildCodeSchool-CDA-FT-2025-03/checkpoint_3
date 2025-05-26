import { useParams } from "react-router";
import { useGetCountryQuery } from "../generated/graphql-types";

function CountryDetails() {
  const { code } = useParams();

  const { data, loading, error } = useGetCountryQuery({
    variables: { code: code || "" },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="flex flex-col items-center gap-2 mt-8">
      <span>{data?.country?.emoji}</span>
      <h2 className="text-xl font-bold">
        Name : {data?.country?.name} ({data?.country?.code})
      </h2>
      <p className="font-semibold">Continent : {data?.country?.continent?.name}</p>
    </section>
  );
}

export default CountryDetails;
