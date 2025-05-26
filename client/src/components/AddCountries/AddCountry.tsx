const AddCountry = () => {
  return (
    // <div className="flex justify-between w-max-[800px] border-2 border-gray-400 rounded-m">
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" required></input>
      </div>
      <div>
        <label htmlFor="emoji">Emoji</label>
        <input id="emoji" type="text" required></input>
      </div>
      <div>
        <label htmlFor="code">Code</label>
        <input id="code" type="text" required></input>
      </div>
      {/* // </div> */}
    </form>
  );
};

export default AddCountry;
