import { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "../components/Game-Card";
import { useTheme } from "../components/ThemeContext";
import SearchBar from "../components/SearchBar";

export default function GamesList() {
  const [list, setList] = useState([]);
  const url = `https://api.rawg.io/api/games?token&key=${
    import.meta.env.VITE_GAMES_API_KEY
  }`;

  const { darkMode } = useTheme();

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        console.log(resp.data);
        setList(resp.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-60">
      <div
        className={`h-screen overflow-scroll mt-10
    ${darkMode ? "text-gray-900 dark:text-gray-100" : "text-gray-900"} 
    `}
      >
        <div>
          <SearchBar />
        </div>
        <div className="flex flex-wrap justify-evenly mb-40">
          {list.map((result) => (
            <div
              className={`my-5 border border-solid rounded-md ${
                darkMode ? "border-white" : "border-black"
              }`}
            >
              <GameCard
                key={result.id}
                id={result.id}
                name={result.name}
                image={result.background_image}
                rating={result.metacritic}
                platforms={result.platforms}
                genre={result.genres.map((e, i) => {
                  if (i === result.genres.length - 1) {
                    return e.name;
                  }
                  return e.name + ", ";
                })}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
