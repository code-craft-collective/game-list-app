import { Link } from "react-router-dom";
import ProfPic from "../assets/ProfPic.jpg";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <img src="/src/Images/Logo.png" alt="Logo" className="h-10" />
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/About" className="hover:text-gray-300">
            About
          </Link>
          <Link to="Games" className="hover:text-gray-300">
            Games
          </Link>
        </div>
        <div>
          <Link to="/profile">
            <img
              src={ProfPic}
              alt="Profile Image"
              className="h-8 w-8 rounded-full cursor-pointer hover:opacity-75"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
