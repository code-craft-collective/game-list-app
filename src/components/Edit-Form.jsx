import React, { useState } from "react";

const EditForm = ({ game, onSubmit }) => {
  const [editedGame, setEditedGame] = useState(game);

  // Ensure that platforms and genres are initialized as empty arrays if undefined
  if (!editedGame.platforms) {
    editedGame.platforms = [];
  }
  if (!editedGame.genres) {
    editedGame.genres = [];
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedGame({
      ...editedGame,
      [name]: value,
    });
  };
  const handleArrayChange = (e) => {
    const { name, value } = e.target;
    setEditedGame({
      ...editedGame,
      [name]: value.split(",").map((item) => item.trim()),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedGame);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={editedGame.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Image:
        <input
          type="text"
          name="image"
          value={editedGame.image}
          onChange={handleChange}
        />
      </label>
      <label>
        Website:
        <input
          type="text"
          name="website"
          value={editedGame.website}
          onChange={handleChange}
        />
      </label>
      <label>
        Rating:
        <input
          type="number"
          name="rating"
          value={editedGame.rating}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={editedGame.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Release Date:
        <input
          type="date"
          name="release-date"
          value={editedGame["release-date"]} // Change to square bracket notation
          onChange={handleChange}
        />
      </label>
      <label>
        Platforms (separated by commas):
        <input
          type="text"
          name="platforms"
          value={editedGame.platforms.join(", ")}
          onChange={handleArrayChange}
        />
      </label>
      <label>
        Genres (separated by commas):
        <input
          type="text"
          name="genres"
          value={editedGame.genres.join(", ")}
          onChange={handleArrayChange}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditForm;
