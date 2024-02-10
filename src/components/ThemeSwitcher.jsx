import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeSwitcher = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div
      className="flex justify-center items-center h-screen relative"
      id="root"
    >
      <div
        className={`flex justify-center items-center h-screen ${
          darkMode && "dark"
        }`}
      ></div>
      <button
        onClick={toggleDarkMode}
        className={`px-4 py-2 rounded-full ${
          darkMode ? "bg-white-400 dark:bg-white-800" : "bg-gray-800"
        } ${
          darkMode ? "text-gray-900 dark:text-gray-100" : "text-white"
        } transition-colors duration-200`}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
