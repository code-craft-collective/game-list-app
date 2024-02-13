import SearchResult from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list bg-white flex flex-col shadow-md rounded-lg mt-4 max-h-300 overflow-y-auto">
      {results.map((result, id) => (
        <SearchResult result={result.name} key={id} />
      ))}
    </div>
  );
};

export default SearchResultsList;
