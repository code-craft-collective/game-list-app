import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditForm from "./Edit-Form";
export default function GameCard(props) {
  const { id, name, image, rating, genre, platforms } = props;
  const [showForm, setShowForm] = useState(false);
  const [showButton, setShowButton] = useState(false);

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

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="game-card p-10 m-10 border border-solid border-black">
      <Link to={`/games/${id}`}>
        <h3 className="text-xl my-2">{name}</h3>
        <div className="w-64">
          <img src={image} className="my-3 w-auto" alt="thumbnail" />
        </div>

        <div className="text-lg">{genre}</div>
        <p className="text-sm">Rating: {rating}</p>
        <div className="w-30 my-3">
          <div className="text-ls">Platform: </div>
          {platforms.map((p, i) => (
            <p key={i + p || p.platform.name} className="text-sm">
              {p || p.platform.name}
            </p>
          ))}
        </div>
      </Link>
    </div>
  );
}
