import { Link } from "react-router";

type CountryCardProps = {
  country: {
    name: string;
    emoji: string;
    code: string;
  };
};

function CountryCard({ country }: CountryCardProps) {
  return (
    <article className="card">
      <h2>{country.name}</h2>
      <p role="img">{country.emoji}</p>
      <Link to={`/countries/${country.code}`}>More info</Link>
    </article>
  );
}

export default CountryCard;
