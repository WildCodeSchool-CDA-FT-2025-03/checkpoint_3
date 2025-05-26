import { Country } from "../gql/graphql-types";

type CounrtyCard = Pick<Country, "name" | "emoji">;

type PropsCard = {
  country: CounrtyCard;
};

const Card = ({ country }: PropsCard) => {
  return (
    <div className="flex flex-col items-center justify-center size-[100px] border-1 border-gray-500 rounded-md">
      <p className="text-center">{country.name}</p>
      <p>{country.emoji}</p>
    </div>
  );
};

export default Card;
