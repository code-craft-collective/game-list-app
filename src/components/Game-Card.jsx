import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function GameCard(props) {
  const { id, name, image, rating, genre, platforms } = props;
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

  const handleAddToFavorites = async () => {
    try {
      await axios.post(dbURL, {
        id,
        name,
        image,
        rating,
        genre,
        platforms,
      });
    } catch (error) {
      console.error("Error adding game to favorites:", error);
    }
  };

  const handleRemoveFromFavorites = async () => {
    try {
      await axios.delete(`${dbURL}/${id}`);
    } catch (error) {
      console.error("Error removing game from favorites:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8 ">
      <div className="bg-gray-800 text-white p-8 rounded-md shadow-lg">
        <div className="mb-4 ">
          <img
            src={image}
            alt={name}
            className="w-60 h-60 object-cover rounded-md shadow-md"
          />
        </div>
        <div className="text-center mb-4 ">
          <button
            onClick={
              savedGames.some((e) => e.id === +id)
                ? handleRemoveFromFavorites
                : handleAddToFavorites
            }
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 "
          >
            {savedGames.some((e) => e.id === +id)
              ? "Remove from Favorites"
              : "Add to Favorites"}
          </button>
        </div>
        <div className="flex-grow ">
          <h1 className="text-3xl font-bold mb-4">{name}</h1>
          <div className=" rounded-md p-4 shadow-md bg-gray-800 text-white">
            <p className="text-lg mb-2">Rating: {rating}</p>
            <p className="text-lg mb-2">Genre: {genre}</p>
            <div className="w-full my-3">
              <div className="text-ls">Platform: </div>
              {platforms.map((p, i) => (
                <p key={i + p} className="text-sm">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
