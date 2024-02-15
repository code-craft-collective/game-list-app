import { Link } from "react-router-dom";
import ProfPic from "../assets/ProfPic.jpg";
import { useTheme } from "./ThemeContext";

import Logo from "../assets/Logo.png";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 ml-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/About" className="hover:text-gray-300">
            About
          </Link>
        </div>
        <Link to="/" className="Logo home">
          <img src={Logo} alt="Logo" className="h-10" />
        </Link>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded-full ${
              darkMode ? "bg-white-400 dark:bg-white-800" : "bg-gray-800"
            } ${
              darkMode ? "text-gray-900 dark:text-gray-100" : "text-white"
            } transition-colors duration-200`}
          >
            {darkMode ? "☀︎" : "☾"}
          </button>
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
