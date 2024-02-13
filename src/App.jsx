import ThemeSwitcher from "./components/ThemeSwitcher";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useTheme } from "./components/ThemeContext";

import ProductDetailPage from "./pages/ProductDetailPage";

import "./App.css";
import SearchBar from "./components/SearchBar";

import Toast from "./components/Toast";
import RoutesRender from "./routes";

function App() {
  const { darkMode } = useTheme();
  return (

    <div className={darkMode ? "dark" : "light" + " App"}>
      <ThemeSwitcher />
      <Navbar />

      <SearchBar />
      <RoutesRender />
      <Footer />
      <Toast />


      <div className="content"></div>

     

        <ProductDetailPage />

        <GamesList />

      </div>
  );
}

export default App;
