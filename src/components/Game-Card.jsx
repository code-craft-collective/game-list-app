import React from "react";

export default function GameCard(props) {
  const { id, name, image, rating, genre, platforms } = props;

  return (
    //ADD LINK to game details page

    <div className="game-card p-10 m-10 border border-solid border-black">
      <h3 className="text-xl my-2">{name}</h3>
      <div className="w-64">
        <img src={image} className="my-3 w-auto" alt="thumbnail" />
      </div>

      <div className="text-lg">{genre}</div>
      <p className="text-sm">Rating: {rating}</p>

      <div className="w-30 my-3">
        <div className="text-ls">Platform: </div>
        {platforms.map((p) => (
          <p className="text-sm">{p.platform.name}</p>
        ))}
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
          ⭐
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2">
          Edit
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2">
          Delete
        </button>
      </div>
    </div>
  );
}
