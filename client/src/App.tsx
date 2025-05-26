import "./index.css";
import Header from "./components/Header";
import CountriesList from "./components/CountriesList";
import AddCountry from "./components/AddCountries/AddCountry";

function App() {
  return (
    <>
      <div className="p-[2px]">
        <Header />
        <div className="flex flex-col justify-center">
          <AddCountry />
          <CountriesList />
        </div>
      </div>
    </>
  );
}

export default App;
