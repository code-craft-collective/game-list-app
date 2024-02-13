import ThemeSwitcher from "./components/ThemeSwitcher";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useTheme } from "./components/ThemeContext";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Toast from "./components/Toast";
import RoutesRender from "./routes";

function App() {
  const { darkMode } = useTheme();
  return (
    <div className={darkMode ? "dark App" : "light App"}>
      <ThemeSwitcher>
        <Navbar />
        <div>
          <RoutesRender />
          {/* <Toast /> */}
        </div>
        <Footer />
      </ThemeSwitcher>
    </div>
  );
}

export default App;
