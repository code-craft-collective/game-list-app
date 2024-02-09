import Navbar from "./components/Navbar";
import GamesList from "./pages/GamesList";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import "./App.css";


function App() {
  return (
    <div>
      <Navbar />
      <GamesList />
      <Footer />
      <Toast />
    </div>
  );
}

export default App;
