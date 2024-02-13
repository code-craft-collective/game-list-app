import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import SearchResultsList from "./SearchResultsList";

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
      .then((response) => setResults(response.data.results))
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    console.log("submitting");
    e.preventDefault();
    fetchData();
  };
  console.log(results);

  return (
    <div className="px-40">
      <form onSubmit={handleSubmit}>
        <div className="relative h-16 border-none rounded-full shadow-md bg-white flex items-center">
          <input
            placeholder="Type to search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none h-full flex-grow ml-10 focus:outline-none"
          />
          <FaSearch className="absolute left-4 text-blue-500" />
        </div>
        {results && results.length > 0 && (
          <SearchResultsList results={results} />
        )}
      </form>
    </div>
  );
};

export default SearchBar;
