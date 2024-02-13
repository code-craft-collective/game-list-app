import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

function GameDetailsPage() {
  const { gameID } = useParams();
  console.log(gameID);
  const [game, setGame] = useState({});

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
  console.log(game);

  const [savedGames, setSavedGames] = useState([]);
  const dbURL = `https://game-app-backend.adaptable.app/saved-games`;

  useEffect(() => {
    axios
      .get(dbURL)
      .then((resp) => {
        setSavedGames(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("saved games: ", savedGames);

  const handleAddToFavorites = async () => {
    try {
      await axios.post("https://game-app-backend.adaptable.app/saved-games/", {
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
      alert("Game added to favorites successfully!");
    } catch (error) {
      console.error("Error adding game to favorites:", error);
      alert("Failed to add game to favorites. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto mt-8 flex flex-col items-center bg-gray-800 text-white p-8 rounded-md">
      <div className="mb-4">
        <img
          src={game.background_image}
          alt={game.name}
          className="w-60 h-60 object-cover rounded-md shadow-md"
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
          onClick={handleAddToFavorites}
          className="ml-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
        >
          {savedGames.some((e) => e.id === +gameID) ? "Remove" : "Add"} to
          Favorites
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
