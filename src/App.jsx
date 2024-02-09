import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import GamesList from "./pages/GamesList";
function App() {
  return (
    <div>
      <GamesList />
      Hello World
    </div>
  );
}
export default App;
