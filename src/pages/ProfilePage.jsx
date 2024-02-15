import { useState } from "react";
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
      <div className="bg-gray-800 text-black rounded-lg shadow-md p-8 mb-8">
        <img
          src={ProfPic}
          alt="Profile Image"
          className="h-16 w-16 rounded-full mb-4"
        />
        <div className="mb-4">
          <label className="block text-white ">Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleInputChange}
              className="border text-black p-2 w-full"
            />
          ) : (
            <span className="text-white">{editedUser.name}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-white">Username:</label>
          {isEditing ? (
            <input
              type="text"
              name="username"
              value={editedUser.username}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full"
            />
          ) : (
            <span className="text-white">{editedUser.username}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-white">Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={editedUser.email}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full"
            />
          ) : (
            <span className="text-white">{editedUser.email}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-white">Bio:</label>
          {isEditing ? (
            <textarea
              name="bio"
              value={editedUser.bio}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full"
            />
          ) : (
            <span className="text-white">{editedUser.bio}</span>
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

      <h2 className="text-2xl font-bold mb-4 text-center">My Games</h2>
      <div className="flex flex-wrap justify-evenly overflow-auto">
        <GamesList showFavorites={true} />
      </div>
    </div>
  );
};

export default ProfilePage;
