
const SearchResult = ({ result }) => {
    return (
      <div
        className="p-2 sm:p-4 cursor-pointer transition duration-300 ease-in-out transform hover:bg-gray-200"
        onClick={() => alert(`You selected ${result}!`)}
      >
        {result}
      </div>
    );
  };
  
  export default SearchResult;
  