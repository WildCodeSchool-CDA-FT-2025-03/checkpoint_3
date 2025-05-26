import { Outlet } from "react-router";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="p-4 bg-stone-50 min-h-screen">
        <Outlet />
      </main>
    </>
  );
}

export default App;
