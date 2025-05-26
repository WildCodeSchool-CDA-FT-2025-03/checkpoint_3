import { Link } from "react-router";

function Header() {
  return (
    <header className="p-4 flex flex-col justify-center items-center gap-4 bg-wild text-white ">
      <h1 className="font-bold text-2xl lg:text-4xl">Checkpoint : frontend</h1>
      <nav>
        <Link to="/countries" className="text-white font-semibold">
          Countries
        </Link>
      </nav>
    </header>
  );
}

export default Header;
