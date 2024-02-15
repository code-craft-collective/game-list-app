import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeSwitcher = (props) => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className={` ${darkMode ? "dark:bg-gray-800" : "bg-gray-100"}`}>
      <div>
        <div className="w-full">{props.children}</div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
