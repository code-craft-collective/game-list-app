import Navbar from "./components/Navbar";
import GamesList from "./pages/GamesList";
import Footer from "./components/Footer";

import ProductDetailPage from "./pages/ProductDetailPage";

import Toast from "./components/Toast";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
      <ProductDetailPage />
      <GamesList />
      <Footer />
      <Toast />
      <SearchBar />
    </div>
  );
}

export default App;
