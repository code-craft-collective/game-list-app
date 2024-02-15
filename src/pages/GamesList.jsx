import { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "../components/Game-Card";
import SearchBar from "../components/SearchBar";
import GameCardMain from "../components/GameCardMain";


export default function GamesList({ showFavorites }) {
  const [list, setList] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);
  const [isFavorites, setIsFavorites] = useState(showFavorites);
  const url = `https://api.rawg.io/api/games?token&key=${
    import.meta.env.VITE_GAMES_API_KEY
  }`;
  const dbURL = "https://game-app-backend.adaptable.app/saved-games";

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        setList(resp.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (isFavorites) {
      axios
        .get(dbURL)
        .then((resp) => {
          setFavoritesList(resp.data);
        })
        .catch((err) => console.log(err));
    }
  }, [isFavorites]);

  // if (!list.length || !favoritesList.length) return "loading...";
   <div className="flex flex-wrap justify-evenly overflow-auto">
      <div className="py-20">
        <SearchBar />
      </div>
  if (isFavorites)
    return favoritesList.map((result) => {
      return (
        <GameCard
          key={result.id}
          id={result.id}
          name={result.name}
          image={result.image}
          rating={result.metacritic}
          platforms={result.platforms}
          genre={result.genres.map((e, i) => {
            if (i === result.genres.length - 1) {
              return e.name;
            }
            return e.name + ", ";
          })}
        />
      );
    });

  return list.map((result) => (
   <div className="flex flex-wrap justify-evenly overflow-auto">
      <div className="py-20">
        <SearchBar />
      </div>
    <GameCardMain
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
  ));
  </div>

}
