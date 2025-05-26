// src/components/Navbar.tsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-pink-600 text-white py-4 shadow-md">
      <div className="text-center">
        <Link to="/" className="text-2xl font-bold block">
          Checkpoint : frontend
        </Link>
        <span className="text-sm font-light tracking-wider uppercase">
          Countries
        </span>
      </div>
    </header>
  );
}
