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
    <form onSubmit={handleSubmit} className="relative text-center mt-28">
      <div className="relative mx-auto w-2/3 h-16 border-none rounded-full p-4 shadow-md bg-white flex items-center">
        <FaSearch className="absolute left-4 text-blue-500" />
        <input
          placeholder="Type to search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent border-none h-full flex-grow pl-8 focus:outline-none"
        />
      </div>
      {results && results.length > 0 && (
        <div className="results-list bg-white mt-4 max-h-300 overflow-y-auto mx-auto w-full max-w-2xl fixed left-96 transform  z-10">
          {results.map((result) => (
            <Link
              key={result.id}
              className="p-2 sm:p-4 cursor-pointer transition duration-300 ease-in-out transform hover:bg-gray-200 block"
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
