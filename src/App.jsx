import Navbar from "./components/Navbar";
import GamesList from "./pages/GamesList";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  return (
    <div>
      <Navbar />
    <GamesList />
      <Footer />
    </div>
  );
}

export default App;
