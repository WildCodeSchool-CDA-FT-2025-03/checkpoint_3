import CardCountry from "../CardCountry/CardCountry";
import { useGetCountriesQuery } from "../../generated/graphql";
import style from "./CountryList.module.css";

function CountryList() {
  const { data, loading, error } = useGetCountriesQuery();

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <div className={style.flexWrap}>
      {data?.countries.map((country) => (
        <CardCountry
          key={country.code}
          name={country.name}
          emoji={country.emoji}
        />
      ))}
    </div>
  );
}

export default CountryList;
