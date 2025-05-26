type CountryProps = {
  name: string;
  emoji: string;
}

const CountryCard = ({ name, emoji }: CountryProps) => {
  return (
    <div className="bg-white p-4 border rounded text-center shadow">
      <p className="text-sm font-medium">{name}</p>
      <p className="text-3xl">{emoji}</p>
    </div>
  );
};

export default CountryCard;