import { Outlet } from "react-router";
import Navbar from "./components/header";

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <Outlet />
      </div>
    </>
  );
}

export default App;
