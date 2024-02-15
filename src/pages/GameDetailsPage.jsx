import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Toast from "../components/Toast";

function GameDetailsPage() {
  const { gameID } = useParams();
  const [game, setGame] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);
  const [removeSuccess, setRemoveSuccess] = useState(false);
  const url = `https://api.rawg.io/api/games/${gameID}?token&key=${
    import.meta.env.VITE_GAMES_API_KEY
  }`;

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        setGame(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [savedGames, setSavedGames] = useState([]);
  const dbURL = `https://game-app-backend.adaptable.app/saved-games`;

  useEffect(() => {
    axios
      .get(dbURL)
      .then((resp) => {
        setSavedGames(resp.data);
      })
      .catch((err) => console.log(err));
  }, [savedGames]);

  const handleAddToFavorites = async () => {
    try {
      await axios.post(dbURL, {
        id: game.id,
        name: game.name,
        image: game.background_image,
        website: game.website,
        rating: game.metacritic,
        description: game.description,
        "release-date": game.released,
        platforms: game.platforms.map((platform) => platform.platform.name),
        genres: game.genres.map((genre) => genre.name),
      });
      setAddSuccess(true);
      setRemoveSuccess(false);
    } catch (error) {
      console.error("Error adding game to favorites:", error);
      setAddSuccess(false);
    }
  };

  const handleRemoveFromFavorites = async () => {
    try {
      await axios.delete(`${dbURL}/${gameID}`);
      setRemoveSuccess(true);
      setAddSuccess(false);
    } catch (error) {
      console.error("Error removing game from favorites:", error);
      setRemoveSuccess(false);
    }
  };

  return (
    <div className="container mx-auto mt-14 flex flex-col items-center bg-gray-800 text-white p-8 rounded-md">
      {addSuccess && <Toast type="success" />}
      {removeSuccess && <Toast type="remove" />}

      <div className="mb-8">
        <img
          src={game.background_image}
          alt={game.name}
          className="w-80 h-80 object-cover rounded-md shadow-md"
        />
      </div>
      <div className="text-center mb-4">
        <a
          href={game.website}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Visit Website
        </a>
        <button
          onClick={
            savedGames.some((e) => e.id === +gameID)
              ? handleRemoveFromFavorites
              : handleAddToFavorites
          }
          className="ml-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
        >
          {savedGames.some((e) => e.id === +gameID)
            ? "Remove from Favorites"
            : "Add to Favorites"}
        </button>
      </div>
      <div className="flex-grow">
        <h1 className="text-3xl font-bold mb-4">{game.name}</h1>
        <div className="bg-gray-700 rounded-md p-4 shadow-md">
          <p className="text-lg mb-2">Metacritic: {game.metacritic}</p>
          <div
            className="text-base mb-4"
            dangerouslySetInnerHTML={{ __html: game.description }}
          />
          <p className="text-lg mb-2">Released: {game.released}</p>
          <p className="text-lg mb-2">
            Platforms:{" "}
            {game?.platforms?.map((e, i) => (
              <span key={i}>
                {e.platform.name}
                {i === game.platforms.length - 1 ? "." : ", "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GameDetailsPage;
