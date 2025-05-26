import { Country } from "../gql/graphql-types";

type CounrtyCard = Pick<Country, "name" | "emoji">;

type PropsCard = {
  country: CounrtyCard;
};

const Card = ({ country }: PropsCard) => {
  return (
    <div className="flex flex-col items-center justify-center size-[100px] border-1 border-gray-500 rounded-md">
      <div>{country.name}</div>
      <div>{country.emoji}</div>
    </div>
  );
};

export default Card;
