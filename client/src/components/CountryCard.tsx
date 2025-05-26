type CountryProps = {
  name: string;
  emoji?: string;
  code: string
}


const CountryCard = ({ name, code, emoji }: CountryProps) => {
  const flag = emoji || code;

  return (
    <article className="bg-white rounded-md border shadow-sm p-3 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow w-24 h-24 mx-auto">
      <p className="font-medium text-sm ">{name}</p>
      <p className="text-2xl mb-1 font-sans">{flag}</p>
    </article>
  );
};

export default CountryCard;