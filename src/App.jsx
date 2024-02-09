import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Footer />
      <ProductDetailPage />
    </div>
  );
}

export default App;
