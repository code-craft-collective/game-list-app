import { useTheme } from "./ThemeContext";

const ButtonThemeSwitcher = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="mx-5">
      <button
        onClick={toggleDarkMode}
        className={`px-4 py-2 rounded-full text-2xl 
        ${
          darkMode ? "bg-white-400 dark:bg-white-800" : "bg-gray-800"
        } 
        ${
          darkMode ? "text-gray-900 dark:text-gray-100" : "text-white"
        } 
        transition-colors duration-200`
      }
      >
        {darkMode ? "☀︎" : "☾"}
      </button>
    </div>
  );
};

export default ButtonThemeSwitcher;
