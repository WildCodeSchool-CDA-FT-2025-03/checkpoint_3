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
    <>
      <h1>Country Details</h1>
      <h2>{data?.country?.name}</h2>
      <p>{data?.country?.code}</p>
      <p>{data?.country?.emoji}</p>
      <p>{data?.country?.continent?.name}</p>
    </>
  );
}

export default CountryDetails;
