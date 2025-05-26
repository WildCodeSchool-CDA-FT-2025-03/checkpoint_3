import { useCountryQuery } from '../../types/graphql-generated';
type inputCountry = {
  code: string;
};

export default function DetailCountry( { code } : inputCountry) {
  const { data, loading, error } = useCountryQuery({
    variables: { code : code },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="country-detail bg-white shadow-md rounded-lg p-4 m-2">
      <span className="country-emoji text-4xl">{data?.country?.emoji}</span>
      <p><strong>Name:</strong> {data?.country?.name}</p>
      <p><strong>Code:</strong> {data?.country?.code}</p>
    </div>
  );
}