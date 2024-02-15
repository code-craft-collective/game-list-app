import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "https://game-app-backend.adaptable.app/saved-games/";

export default function EditForm(props) {
  const [rating, setRating] = useState(props.rating);
  const { id, getProfile, toggleForm } = props;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then((response) => {
        const game = response.data;
        setRating(game.rating);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { rating };
    axios.patch(`${API_URL}/${id}`, requestBody).then((response) => {
      console.log(response);
      props.getProfile();
      getProfile();
      toggleForm();
      // navigate(`/projects/${id}`);
    });
  };

  return (
    <div className="edit-rating flex flex-col items-center">
      <form onSubmit={handleSubmit} className="mb-4">
        <label className="mb-2">Rating:</label>
        <input
          type="text"
          name="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="border text-black border-gray-300 p-2 w-full"
        />

        <button
          className="mt-4 ml-28 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
}
