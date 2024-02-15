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

  return (
    <div className="w-64 p-3 m-3 border border-solid border-black inline-block">
      <Link to={`/games/${id}`} className="block">
        <h3 className="text-xl my-2">{name}</h3>
        <div className="w-full">
          <img src={image} className="my-3 w-full" alt="thumbnail" />
        </div>
        <div className="text-lg">{genre}</div>
        <p className="text-sm">Rating: {rating}</p>
        <div className="w-full my-3">
          <div className="text-ls">Platform: </div>
          {platforms.map((p, i) => (
            <p key={i + p} className="text-sm">
              {p}
            </p>
          ))}
        </div>
      </Link>
    </div>
  );
}
