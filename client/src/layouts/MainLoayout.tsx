import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}