import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GameCardMain = (props) => {
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

  return (
    <div
      className="game-card p-6 m-6 border rounded-lg overflow-hidden bg-gray-800 text-white shadow-md"
      style={{ width: "400px", height: "420px" }}
    >
      <Link to={`/games/${id}`} className="flex flex-col h-full">
        <h3 className="text-1xl mb-1">{name}</h3>
        <div className="w-full h-48 overflow-hidden mb-2">
          <img
            src={image}
            className="w-full h-full object-cover"
            alt="thumbnail"
          />
        </div>

        <div className="text-lg mb-2">{genre}</div>
        <p className="text-lg mb-2">Rating: {rating}</p>
        <div className="text-sm">
          <span className="font-bold">Platform:</span>{" "}
          {platforms.map((p, i) => (
            <span key={i + p.platform.name}>
              {p.platform.name}
              {i === platforms.length - 1 ? "" : ", "}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default GameCardMain;
