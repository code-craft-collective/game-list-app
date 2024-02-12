import Navbar from "./components/Navbar";
import GamesList from "./pages/GamesList";
import Footer from "./components/Footer";

import ProductDetailPage from "./pages/ProductDetailPage";

import Toast from "./components/Toast";
import "./App.css";



function App() {
  return (
    <div className="App">
      <Navbar />


      <Footer />
      <ProductDetailPage />

      <GamesList />
      <Footer />
      <Toast />

    </div>
  );
}

export default App;
