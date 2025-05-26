import "./App.css";
import { useState } from "react";
import {
  useAllCountriesQuery,
  useCountryMutation,
} from "./generated/graphql-types";
import CountryCard from "./components/CountryCard";
import Header from "./components/Header";

function App() {
  const { data, loading, error, refetch } = useAllCountriesQuery();
  const [countryMutation] = useCountryMutation();
  const [country, setCountry] = useState({ name: "", emoji: "", code: "" });
  const [continent, setContinent] = useState(0);

  const handleCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCountry((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCountry = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await countryMutation({
        variables: {
          data: {
            ...country,
            continent: {
              id: continent,
            },
          },
        },
      });
      console.log(result);
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  if (error) return <p>Error</p>;
  if (loading) return <p>loading</p>;

  return (
    <>
      <Header />
      <form onSubmit={handleAddCountry}>
        <label htmlFor="name">
          Nom du pays
          <input
            type="text"
            id="name"
            name="name"
            required
            value={country.name}
            onChange={handleCountry}
          />
        </label>
        <label htmlFor="code">
          Code du pays
          <input
            type="text"
            id="code"
            name="code"
            maxLength={3}
            required
            value={country.code}
            onChange={handleCountry}
          />
        </label>
        <label htmlFor="emoji">
          Emoji , drapeau
          <input
            type="text"
            id="emoji"
            name="emoji"
            required
            maxLength={4}
            value={country.emoji}
            onChange={handleCountry}
          />
        </label>
        <label htmlFor="continent">
          N° du continent
          <input
            type="number"
            id="continent"
            name="continent"
            value={continent}
            onChange={(e) => setContinent(+e.target.value)}
          />
        </label>
        <button type="submit">Ajouter</button>
      </form>
      <main className="container">
        {data?.countries.map((country) => {
          return <CountryCard country={country} key={country.id} />;
        })}
      </main>
    </>
  );
}

export default App;

/**
 * {
  "data": {
    "code": "ZZZ",
    "continent": {
      "id": 1
    },
    "emoji": "Emo",
    "name": "new"
  }
}
 */
