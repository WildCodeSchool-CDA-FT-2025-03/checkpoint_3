import InputForm from "../Form/InputForm";
import SelectForm from "../Form/SelectForm";
import { NewCountryInput, useAddCountryMutation, useQueryContinentQuery } from "../../types/graphql-generated";
import { useState } from "react";

export default function FormCounty() {
  const [saveCountryInfo, setCountryInfo] = useState<NewCountryInput | null>({
    name: '',
    continent: { id: 0 }, // Assuming continent is an object with an id
    code: '',
    emoji: '',
  });
  const [AddCountryMutation] = useAddCountryMutation();
  const { data, loading } = useQueryContinentQuery();

  if (loading || !data?.continents) return null;
  const options = data.continents.map((continent) => ({
    key: continent.id.toString(),
    value: continent.name,
  }));

  const HandleInfoCountry = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    if (saveCountryInfo) {
      if( e.target.name === 'continent') {
        const continentId = parseInt(e.target.value, 10);
        setCountryInfo(() => ({ ...saveCountryInfo, continent: { id: continentId } }));
      }
      else
      {
        setCountryInfo(() => ({ ...saveCountryInfo, [e.target.name]: e.target.value }));
      }
    }
  };

  const handleSubmitInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!saveCountryInfo) return;
    const { data, errors } = await AddCountryMutation({
      variables: { data: saveCountryInfo },
    });
    if (errors) {
      console.error("Error adding country:", errors);
    } else {
      console.log("Country added successfully:", data?.addCountry);
      setCountryInfo({ name: '', code: '', emoji: '' }); // Reset form after submission
    }
  };

  return (
    <div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmitInfo}>
        <h2 className="text-2xl font-bold mb-4">Add a New Country</h2>
        <div className="mb-4">
          <InputForm
            title="Name"
            name="name"
            placeholder="Name"
            handle={HandleInfoCountry}
            required={true}
            value={(saveCountryInfo && saveCountryInfo.name) || ''}
          />
        </div>
        <div className="mb-4">
          <InputForm
            title="Code"
            name="code"
            placeholder="Code"
            handle={HandleInfoCountry}
            required={true}
            value={(saveCountryInfo && saveCountryInfo.code) || ''}
          />
        </div>
        <div className="mb-4">
          <InputForm
            title="Emoji"
            name="emoji"
            placeholder="Emoji"
            handle={HandleInfoCountry}
            required={true}
            value={(saveCountryInfo && saveCountryInfo.emoji) || ''}
          />
        </div>
        <div className="mb-4">
          <SelectForm
            name="continent"
            value={saveCountryInfo?.continent?.id && saveCountryInfo?.continent?.id.toString() || ''}
            title="Continent"
            option={options}
            handle={HandleInfoCountry}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Country
        </button>
      </form>
    </div>
  );
}
