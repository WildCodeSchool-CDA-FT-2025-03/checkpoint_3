import { Link } from 'react-router-dom';
type Country = {
  __typename?: "Country";
  code: string;
  emoji: string;
  id: number;
  name: string;
};

export default function Card({ code, emoji, id, name }: Country) {
  return (
    <>
      <Link className="bg-blue text-white px-4 py-2 rounded-md" to={'/Details/' + code}>
        <li key={id} className="country-card bg-white text-black shadow-md rounded-lg p-4 m-2 flex flex-col items-center text-sm">
          <h2 className="country-name text-sm">{name}</h2>
          <p className="country-code">Code: {code}</p>
          <span className="country-emoji">{emoji}</span>
        </li>
      </Link>
    </>
  );
}
