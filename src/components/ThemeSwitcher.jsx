import React, { useEffect } from "react";
import { useTheme } from "./ThemeContext";

const ThemeSwitcher = (props) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex justify-center items-center overflow-hidden h-screen ${
        darkMode ? "dark:bg-gray-800" : "bg-gray-100"
      }`}
    >
      <div
        className={`flex flex-col items-center w-screen overflow-hidden ${
          darkMode ? "dark" : ""
        }`}
      >
        <div className="w-full">{props.children}</div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
