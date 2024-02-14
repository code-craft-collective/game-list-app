import React, { useState } from "react";
import ProfPic from "../assets/ProfPic.jpg";
import ThemeSwitcher from "../components/ThemeSwitcher";

import { useTheme } from "../components/ThemeContext";

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

  const { darkMode } = useTheme();

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
    <div
      className={`container flex flex-row justify-evenly h-screen mx-auto mt-40 p-4 py-52
    ${darkMode ? "text-gray-900 dark:text-gray-100" : "text-gray-900"}
    `}
    >
      <div>
        <img
          src={ProfPic}
          alt="Profile Image"
          className="h-80 w-80 rounded-full"
        />
      </div>
      <div
        className={` 
    ${darkMode ? "text-gray-900 dark:text-gray-100" : "text-gray-900"}
`}
      >
        <div className="mb-4">
          <label className="block">Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleInputChange}
              className="border p-2 w-full text-gray-900"
            />
          ) : (
            <span>{editedUser.name}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block">Username:</label>
          {isEditing ? (
            <input
              type="text"
              name="username"
              value={editedUser.username}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full text-gray-900"
            />
          ) : (
            <span>{editedUser.username}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block">Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={editedUser.email}
              onChange={handleInputChange}
              className="borderp-2 w-full text-gray-900"
            />
          ) : (
            <span>{editedUser.email}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block">Bio:</label>
          {isEditing ? (
            <textarea
              name="bio"
              value={editedUser.bio}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full text-gray-900"
            />
          ) : (
            <span>{editedUser.bio}</span>
          )}
        </div>
        <div className="mb-4">
          <label>My Games:</label>
          {isEditing ? (
            <input
              type="text"
              name="MyGames"
              value={editedUser.MyGames.join(", ")}
              onChange={handleInputChange}
              className="border p-2 w-full text-gray-900"
            />
          ) : (
            <span>{editedUser.MyGames.join(", ")}</span>
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
    </div>
  );
};

export default ProfilePage;
