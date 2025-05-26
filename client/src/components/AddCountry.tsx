import { useState } from "react";
import {
  useAddCountryMutation,
  useGetCountriesQuery,
  useGetContinentsQuery,
} from "../generated/graphql-types";

function AddCountry() {
  const { loading, error, refetch } = useGetCountriesQuery();
  const { data: continentsData } = useGetContinentsQuery();
  const [addCountry] = useAddCountryMutation();
  const [country, setCountry] = useState({
    name: "",
    emoji: "",
    code: "",
  });
  const [continentId, setContinentId] = useState(0);

  const handleCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name) {
      setCountry((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmitAddCountry = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await addCountry({
        variables: {
          data: {
            name: country.name,
            emoji: country.emoji,
            code: country.code,
            continent:
              continentId > 0
                ? {
                    id: continentId,
                  }
                : undefined,
          },
        },
      });

      setCountry({
        name: "",
        emoji: "",
        code: "",
      });

      setContinentId(0);
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  if (error) return <div>Error: {error.message}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <form
      onSubmit={handleSubmitAddCountry}
      className="container mx-auto flex flex-col lg:flex-row justify-between gap-6 m-8 p-4 border rounded-md border-stone-400 bg-stone-100"
    >
      <label htmlFor="name" className="flex flex-col gap-2 font-semibold w-full lg:w-1/4">
        Name
        <input
          type="text"
          id="name"
          name="name"
          value={country.name}
          onChange={handleCountry}
          className="border border-stone-400 rounded-sm bg-white p-2"
        />
      </label>
      <label htmlFor="emoji" className="flex flex-col gap-2 font-semibold w-full lg:w-1/4">
        Emoji
        <input
          type="text"
          id="emoji"
          name="emoji"
          value={country.emoji}
          onChange={handleCountry}
          className="border border-stone-400 rounded-sm bg-white p-2"
        />
      </label>
      <label htmlFor="code" className="flex flex-col gap-2 font-semibold w-full lg:w-1/4">
        Code
        <input
          type="text"
          id="code"
          name="code"
          value={country.code}
          onChange={handleCountry}
          className="border border-stone-400 rounded-sm bg-white p-2"
        />
      </label>
      <label htmlFor="continentId" className="flex flex-col gap-2 font-semibold w-full lg:w-1/4">
        Continent
        <select
          id="continentId"
          value={continentId}
          onChange={(e) => setContinentId(Number(e.target.value))}
          className="border border-stone-400 rounded-sm bg-white p-2"
        >
          {continentsData?.continents?.map((continent) => (
            <option key={continent.id} value={continent.id}>
              {continent.name}
            </option>
          )) || <option value={0}>Select a continent</option>}
        </select>
      </label>

      <button type="submit" className="bg-wild text-white rounded-md px-2 py-4 w-full lg:w-1/4">
        Add
      </button>
    </form>
  );
}

export default AddCountry;
