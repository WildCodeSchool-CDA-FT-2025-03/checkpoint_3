import { useParams } from "react-router-dom";
import { useGetCountryQuery } from "../types/graphql-generated";
import { Link } from "react-router-dom";

const CountryDetails = () => {
  const { code } = useParams<{ code: string }>();
  const { data, loading, error } = useGetCountryQuery({
    variables: { code: code! },
  });

  if (loading) return <p className="p-4">Chargement...</p>;
  if (error || !data?.country) return <p className="p-4 text-red-600">Pays introuvable</p>;

  const country = data.country;
  const flag = country.emoji;

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] p-6 space-y-4 text-center">
      <p className="text-7xl">{flag}</p>
      <p className="text-lg">
        <strong>Name :</strong> {country.name} ({country.code})
      </p>
      <p className="text-lg">
        <strong>Continent :</strong> {country.continent?.name ?? "N/A"}
      </p>
      <Link to="/" className="text-pink-600 underline mt-4 text-sm">← Back to countries</Link>
    </section>

  );
};

export default CountryDetails;


