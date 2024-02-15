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
    <div className="edit-rating">
      <form onSubmit={handleSubmit}>
        <label>Rating:</label>
        <input
          type="text"
          name="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}
