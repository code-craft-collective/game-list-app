import ThemeSwitcher from "./components/ThemeSwitcher";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useTheme } from "./components/ThemeContext";
import "./App.css";
// import Toast from "./components/Toast";
import RoutesRender from "./routes";

function App() {
  const { darkMode } = useTheme();
  return (
    <div className={darkMode ? "dark" : "light" + "App"}>
      <Navbar />
      <ThemeSwitcher>
        <RoutesRender />
      </ThemeSwitcher>
      <Footer />
      {/* <Toast /> */}
    </div>
  );
}

export default App;
