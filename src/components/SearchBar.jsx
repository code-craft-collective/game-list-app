import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const fetchData = () => {
    axios
      .get(
        `https://api.rawg.io/api/games?token&key=${
          import.meta.env.VITE_GAMES_API_KEY
        }&search=${input}`
      )
      .then((response) => {
        setResults(response.data.results);
        console.log(response.data);
      })

      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative w-full h-16 border-none rounded-full p-4 shadow-md bg-white flex items-center">
        <input
          placeholder="Type to search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent border-none h-full flex-grow ml-10 focus:outline-none"
        />
        <FaSearch className="absolute left-4 text-blue-500" />
      </div>
      {results && results.length > 0 && (
        <div className="results-list bg-white flex flex-col shadow-md rounded-lg mt-4 max-h-300 overflow-y-auto">
          {results.map((result) => (
            <Link
              key={result.id}
              className="p-2 sm:p-4 cursor-pointer transition duration-300 ease-in-out transform hover:bg-gray-200"
              to={`/games/${result.id}`}
              onClick={() => (window.location.href = `/games/${result.id}`)}
            >
              {result.name}
            </Link>
          ))}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
