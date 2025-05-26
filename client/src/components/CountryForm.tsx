import { useState } from "react";
import { useAddCountryMutation, useGetContinentsQuery } from "../types/graphql-generated";

const CountryForm = () => {
  const [form, setForm] = useState({ name: "", code: "", emoji: "", continentId: "" });
  const [addCountry, { loading }] = useAddCountryMutation({
    refetchQueries: ["GetCountries"],
  });

  const { data: continentsData } = useGetContinentsQuery();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.code || !form.emoji || !form.continentId) return;
    console.log("form valide")

    await addCountry({
      variables: {
        data: {
          name: form.name,
          code: form.code.toUpperCase(),
          emoji: form.emoji,
          continent: form.continentId,
        },
      },
    });

    setForm({ name: "", code: "", emoji: "", continentId: "" });
  };

  console.log("Envoi des données :", form);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border shadow rounded-md p-6 w-full max-w-5xl mx-auto flex flex-col md:flex-row md:items-end gap-4"
    >
      {/* Champ Name */}
      <div className="flex flex-col w-full md:w-1/3">
        <label className="mb-1 font-medium">Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>

      {/* Champ Emoji */}
      <div className="flex flex-col w-full md:w-1/4">
        <label className="mb-1 font-medium">Emoji</label>
        <input
          name="emoji"
          value={form.emoji}
          onChange={handleChange}
          className="border p-2 rounded text-center"
        />
      </div>

      {/* Champ Code */}
      <div className="flex flex-col w-full md:w-1/4">
        <label className="mb-1 font-medium">Code</label>
        <input
          name="code"
          value={form.code}
          onChange={handleChange}
          className="border p-2 rounded text-center uppercase"
        />
      </div>

      {/* Select continent */}
      <div className="flex flex-col w-full md:w-1/4">
        <label className="mb-1 font-medium">Continent</label>
        <select name="continentId" value={form.continentId} onChange={handleChange} className="border rounded p-2">
          <option value="">-- Choisir un continent --</option>
          {continentsData?.continents.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* Bouton Add */}
      <button
        type="submit"
        disabled={loading}
        className="bg-pink-600 text-white px-6 py-2 rounded h-[42px] md:mt-[23px]"
      >
        {loading ? "Adding..." : "Add"}
      </button>
    </form >
  );
};

export default CountryForm;