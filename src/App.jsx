import React from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import { useTheme } from "./components/ThemeContext";

function App() {
  const { darkMode } = useTheme();
  return (
    <div className={darkMode ? "dark" : "light"}>
      <ThemeSwitcher />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
