import { Outlet } from "react-router";

function App() {
  return (
    <>
      <div className="app">
        <Outlet />
        <h1> hello</h1>
      </div>
    </>
  );
}

export default App;
