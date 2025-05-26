import "./index.css";
import Header from "./components/Header";
import CountriesList from "./components/CountriesList";

function App() {
  return (
    <>
      <div className="p-[2px]">
        <Header />
        <div className="flex justify-center">
          <CountriesList />
        </div>
      </div>
    </>
  );
}

export default App;
