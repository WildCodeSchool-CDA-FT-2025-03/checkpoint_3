import { Link } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import { useGetCountriesQuery } from "../types/graphql-generated";

const Home = () => {
  const { data, loading, error } = useGetCountriesQuery();

  console.log({ data, loading, error });

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <div className="p-4">
      <section className="flex flex-wrap justify-center gap-2">
        {data?.countries.map((c) => (
          <Link to="/" key={c.code} className="[text-decoration:none] [color:inherit]">
            <CountryCard name={c.name} code={c.code} emoji={c.emoji} />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Home;