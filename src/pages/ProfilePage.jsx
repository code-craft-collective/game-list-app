import React, { useState } from "react";
import ProfPic from "../assets/ProfPic.jpg";
import GamesList from "./GamesList";

const ProfilePage = () => {
  const userData = {
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    bio: "A passionate developer",
    MyGames: [],
  };

  const [isEditing, setEditing] = useState(false);

  const [editedUser, setEditedUser] = useState(userData);

  const toggleEditing = () => {
    setEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  const saveChanges = () => {
    console.log("Changes saved:", editedUser);

    setEditing(false);
  };
  return (
    <div className="container mx-auto mt-8 p-4">
      <img
        src={ProfPic}
        alt="Profile Image"
        className="h-16 w-16 rounded-full mb-4"
      />
      <div className="mb-4">
        <label className="block text-gray-600">Name:</label>
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
          />
        ) : (
          <span className="text-gray-800">{editedUser.name}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Username:</label>
        {isEditing ? (
          <input
            type="text"
            name="username"
            value={editedUser.username}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
          />
        ) : (
          <span className="text-gray-800">{editedUser.username}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Email:</label>
        {isEditing ? (
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
          />
        ) : (
          <span className="text-gray-800">{editedUser.email}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Bio:</label>
        {isEditing ? (
          <textarea
            name="bio"
            value={editedUser.bio}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
          />
        ) : (
          <span className="text-gray-800">{editedUser.bio}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">My Games:</label>
        {isEditing ? (
          <input
            type="text"
            name="MyGames"
            value={editedUser.MyGames.join(", ")}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
          />
        ) : (
          <GamesList showFavorites={true} />
        )}
      </div>

      <button
        onClick={toggleEditing}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
      >
        {isEditing ? "Cancel" : "Edit Profile"}
      </button>
      {isEditing && (
        <button
          onClick={saveChanges}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
      )}
    </div>
  );
};
export default ProfilePage;
