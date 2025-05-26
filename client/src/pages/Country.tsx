import { useParams } from "react-router";
import { useOneCountriesQuery } from "../generated/graphql-types";

import Header from "../components/Header";

function Country() {
  const { id } = useParams();
  console.log(id);
  const { data, loading, error } = useOneCountriesQuery({
    variables: {
      code: id as string,
    },
  });

  if (error) return <p>Error</p>;
  if (loading) return <p>loading</p>;

  console.log(data);

  return (
    <>
      <Header />
      <main className="container">
        <article>
          <h1>{data?.country.name}</h1>
        </article>
      </main>
    </>
  );
}

export default Country;
