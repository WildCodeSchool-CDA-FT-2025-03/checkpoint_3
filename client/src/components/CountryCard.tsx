type CountryCardProps = {
  country: {
    name: string;
    emoji: string;
  };
};

function CountryCard({ country }: CountryCardProps) {
  return (
    <article className="card">
      <h2>{country.name}</h2>
      <p role="img">{country.emoji}</p>
    </article>
  );
}

export default CountryCard;
