import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function GameCard(props) {
  const { id, name, image, genre, rating, platform } = props;

  return (
    //ADD LINK to game details page
    <>
      <div className="game-card">
        <h3>{name}</h3>
        <img src={image} className="card-image" alt="thumbnail" />
        <label className="genre-label">{genre}</label>
        <p>{rating}</p>
        <label className="platforms-label">{platform}</label>
      </div>
    </>
  );
}
