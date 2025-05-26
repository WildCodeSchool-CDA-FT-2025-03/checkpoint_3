import "./App.css";
import { useCountriesQuery } from "./generated/graphql-types";
import CountryCard from "./components/CountryCard";
import Header from "./components/Header";

function App() {
  const { data, loading, error } = useCountriesQuery();

  if (error) return <p>Error</p>;
  if (loading) return <p>loading</p>;

  console.log(data);
  return (
    <>
      <Header />
      <main className="container">
        {data?.countries.map((country) => {
          return <CountryCard country={country} key={country.id} />;
        })}
      </main>
    </>
  );
}

export default App;
