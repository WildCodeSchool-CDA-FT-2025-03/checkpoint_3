import { useCountryCardQuery } from "../gql/graphql-types";
import Card from "./Card";

const CountriesList = () => {
  const { data } = useCountryCardQuery();
  return (
    <div className="flex flex-wrap max-w-[800px] gap-0.5">
      {data?.countries.map((c) => <Card country={c} />)}
    </div>
  );
};

export default CountriesList;
