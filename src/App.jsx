import React from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Navbar from "./components/Navbar";
import GamesList from "./pages/GamesList";
import Footer from "./components/Footer";
import { useTheme } from "./components/ThemeContext";

import ProductDetailPage from "./pages/ProductDetailPage";

import "./App.css";
import Toast from "./components/Toast";
import RoutesRender from "./routes";

function App() {
  const { darkMode } = useTheme();
  return (

    <div className={darkMode ? "dark" : "light" + " App"}>
      <ThemeSwitcher />
      <Navbar />
      <RoutesRender />
      <Footer />
      <Toast />

    <div className={darkMode ? "dark" : "light"}>
      <ThemeSwitcher />
      <Navbar />
      <div className="content"></div>

      <div className="App">
        <Navbar />

        <Footer />
        <ProductDetailPage />

        <GamesList />
        <Footer />
        <Toast />
      </div>
    </div>
  );
}

export default App;
