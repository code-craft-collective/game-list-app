import React from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Navbar from "./components/Navbar";
import GamesList from "./pages/GamesList";
import Footer from "./components/Footer";
import { useTheme } from "./components/ThemeContext";

import ProductDetailPage from "./pages/ProductDetailPage";

import Toast from "./components/Toast";
import "./App.css";

function App() {
  const { darkMode } = useTheme();
  return (
    <div className={darkMode ? "dark" : "light"}>
      {/* <ThemeSwitcher /> */}
      <div className="content"></div>

      <div className="App">
        <Navbar />
        {/* <ProductDetailPage /> */}
        <GamesList />
        <Footer />
        <Toast />t{" "}
      </div>
    </div>
  );
}

export default App;
