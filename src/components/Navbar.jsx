import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <img src="/src/Images/Logo.png" alt="Logo" className="h-10" />
        <div className="space-x-4">
          <Link to="/">
            <button className="hover:text-gray-300">Home</button>
          </Link>
          <button className="hover:text-gray-300">About</button>
          <button className="hover:text-gray-300">Games</button>
        </div>
        <img src="" alt="Profile Image" className="h-8" />
      </div>
    </nav>
  );
};

export default Navbar;
