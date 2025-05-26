import { useGetCountriesQuery } from "../types/graphql-generated";

const Home = () => {
  const { data, loading, error } = useGetCountriesQuery();

  console.log({ data, loading, error });

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des pays</h1>
      <ul className="space-y-2">
        {data?.countries.map((c) => (
          <li key={c.code}>
            {c.name} - {c.emoji}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;