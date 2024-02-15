import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditForm from "./Edit-Form";

export default function GameCard(props) {
  const { id, name, image, rating, genres, platforms, handleFetchProfile } =
    props;
  const [savedGames, setSavedGames] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const dbURL = `https://game-app-backend.adaptable.app/saved-games`;

  const handleGetProfile = () => {
    axios
      .get(dbURL)
      .then((resp) => {
        setSavedGames(resp.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handleGetProfile();
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);

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

        <div className="text-lg">Genres:</div>
        {genres &&
          genres.map((genre, i) => (
            <p key={i} className="text-sm">
              {genre}
            </p>
          ))}
        <p className="text-sm">Rating: {rating}</p>
        <div className="w-full my-3">
          <div className="text-ls">Platform: </div>
          {platforms.map((platform, i) => (
            <p key={i} className="text-sm">
              {platform}
            </p>
          ))}
        </div>
      </Link>
      <button onClick={toggleForm}>Edit Rating</button>
      {showForm && (
        <EditForm
          id={id}
          rating={rating}
          getProfile={handleFetchProfile}
          toggleForm={toggleForm}
        />
      )}

    </div>
  );
}
