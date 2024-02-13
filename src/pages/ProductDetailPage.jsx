import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetailPage() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.rawg.io/api/games/3498?token&key=aaae3e1f5d0048e39b73bb253978b5c0"
      )
      .then((response) => {
        const oneProduct = response.data;
        setProduct(oneProduct);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleAddToFavorites = async () => {
    try {
      await axios.post("https://game-app-backend.adaptable.app/saved-games/", {
        id: product.id,
        name: product.name,
        image: product.background_image,
        website: product.website,
        rating: product.metacritic,
        description: product.description,
        "release-date": product.released,
        platforms: product.platforms.map((platform) => platform.platform.name),
        genres: product.genres.map((genre) => genre.name),
      });
      alert("Game added to favorites successfully!");
    } catch (error) {
      console.error("Error adding game to favorites:", error);
      alert("Failed to add game to favorites. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto mt-8 flex flex-col items-center bg-gray-800 text-white p-8 rounded-md">
      <div className="mb-4">
        <img
          src={product.background_image}
          alt={product.name}
          className="w-60 h-60 object-cover rounded-md shadow-md"
        />
      </div>
      <div className="text-center mb-4">
        <a
          href={product.website}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Visit Website
        </a>
        <button
          onClick={handleAddToFavorites}
          className="ml-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
        >
          Add to Favorites
        </button>
      </div>
      <div className="flex-grow">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <div className="bg-gray-700 rounded-md p-4 shadow-md">
          <p className="text-lg mb-2">Metacritic: {product.metacritic}</p>
          <div
            className="text-base mb-4"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
          <p className="text-lg mb-2">Released: {product.released}</p>
          <p className="text-lg mb-2">
            Platforms:{" "}
            {product?.platforms?.map((e, i) => (
              <span key={i}>
                {e.platform.name}
                {i === product.platforms.length - 1 ? "." : ", "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
