import { useState } from "react";
import { useAddCountryMutation } from "../types/graphql-generated";

const CountryForm = () => {
  const [form, setForm] = useState({ name: "", code: "", emoji: "" });
  const [addCountry, { loading }] = useAddCountryMutation({
    refetchQueries: ["GetCountries"],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.code || !form.emoji) return;

    await addCountry({
      variables: {
        data: {
          name: form.name,
          code: form.code.toUpperCase(),
          emoji: form.emoji,
        },
      },
    });

    setForm({ name: "", code: "", emoji: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border shadow rounded-md p-6 w-full max-w-4xl mx-auto flex flex-col md:flex-row md:items-end gap-4"
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

      {/* Bouton Add */}
      <button
        type="submit"
        disabled={loading}
        className="bg-pink-600 text-white px-6 py-2 rounded h-[42px] md:mt-[23px]"
      >
        {loading ? "Adding..." : "Add"}
      </button>
    </form>
  );
};

export default CountryForm;