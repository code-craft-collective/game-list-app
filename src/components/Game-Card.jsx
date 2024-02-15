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
    <div className="w-64 p-3 m-3 border border-solid border-black inline-block">
      <Link to={`/games/${id}`} className="block">
        <h3 className="text-xl my-2">{name}</h3>
        <div className="w-full">
          <img src={image} className="my-3 w-full" alt="thumbnail" />
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