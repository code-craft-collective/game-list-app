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
    <div
      className=" game-card p-6 m-6 border rounded-lg overflow-hidden bg-gray-800 text-white"
      style={{ flexBasis: "30%", maxWidth: "30%" }}
    >
      <Link to={`/games/${id}`} className="block">
        <h3 className="text-2xl mb-2 font-bold">{name}</h3>
        <div className="w-full h-48 overflow-hidden mb-2">
          <img
            src={image}
            className="w-full h-full object-cover"
            alt="thumbnail"
          />
        </div>
        <div className="text-lg mb-2">Genres:</div>
        {genres &&
          genres.map((genre, i) => (
            <p key={i} className="text-lg mb-2">
              {genre}
            </p>
          ))}
        <p className="text-lg mb-2">Rating: {rating}</p>
        <div className="text-sm">
          <div className="text-ls">Platform: </div>
          {platforms.map((platform, i) => (
            <p key={i} className="text-sm">
              {platform}
            </p>
          ))}
        </div>
      </Link>
      <button
        className="mt-4 ml-24 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
        onClick={toggleForm}
      >
        Edit Rating
      </button>
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
