import { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "../components/Game-Card";


export default function GamesList() {
  const [list, setList] = useState([]);
  const url = `https://api.rawg.io/api/games?token&key=${
    import.meta.env.VITE_GAMES_API_KEY
  }`;

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
    <div className="flex flex-wrap justify-evenly h-screen overflow-auto">
      {list.map((result) => (
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
      ))}
    </div>
  );
}
