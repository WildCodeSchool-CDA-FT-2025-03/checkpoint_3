import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <Header />
      <Outlet />
    </div>
  );
}
