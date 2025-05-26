import { useState } from "react";
import InputForm from "./InputForm";

export default function CreateCountryForm() {
  const [data, setData] = useState({
    name: '',
    emoji: '',
    code: ''
  });

   const handleInputChange = (
     e: React.ChangeEvent<HTMLInputElement>,
     field: string
   ) => {
     setData({ ...data, [field]: e.target.value });
   };
  const handleSubmit = ()=> {

  }
  console.log(data)
  return (
    <div>
      <form
        className="flex flex-row justify-between m-3 border p-3"
        onSubmit={handleSubmit}
      >
        <InputForm
          title="name"
          name="label"
          type="text"
          value={data.name}
          placeholder="name"
          handle={(e) => handleInputChange(e, "name")}
        />
        <InputForm
          title="Emoji"
          name="emoji"
          type="text"
          value={data.emoji}
          placeholder="Emoji"
          handle={(e) => handleInputChange(e, "emoji")}
        />
        <InputForm
          title="Code"
          name="code"
          type="text"
          value={data.code}
          placeholder="Code"
          handle={(e) => handleInputChange(e, "code")}
        />
        <button
          className="bg-headerBg text-white text-center p-3 border rounded-sm "
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}
