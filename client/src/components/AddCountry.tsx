function AddCountry() {
  return (
    <form className="container mx-auto flex flex-col lg:flex-row justify-between gap-6 m-8 p-4 border rounded-md border-stone-400 bg-stone-100">
      <label htmlFor="name" className="flex flex-col gap-2 font-semibold w-full lg:w-1/4">
        Name
        <input type="text" id="name" className="border border-stone-400 rounded-sm bg-white p-2" />
      </label>
      <label htmlFor="emoji" className="flex flex-col gap-2 font-semibold w-full lg:w-1/4">
        Emoji
        <input type="text" id="emoji" className="border border-stone-400 rounded-sm bg-white p-2" />
      </label>
      <label htmlFor="code" className="flex flex-col gap-2 font-semibold w-full lg:w-1/4">
        Code
        <input type="text" id="code" className="border border-stone-400 rounded-sm bg-white p-2" />
      </label>

      <button type="submit" className="bg-wild text-white rounded-md px-2 py-4 w-full lg:w-1/4">
        Add
      </button>
    </form>
  );
}

export default AddCountry;
