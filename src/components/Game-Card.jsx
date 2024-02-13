import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";

export default function GameCard(props) {
  const { id, name, image, rating, genre, platforms } = props;
  const { darkTheme } = useTheme();

  return (
    //ADD LINK to game details page

    <Link to={`/games/${id}`}>
      <div className="p-10">
        <h3 className="text-xl my-2">{name}</h3>
        <div className="w-64">
          <img src={image} className="my-3 w-auto" alt="thumbnail" />
        </div>

        <div className="text-lg">{genre}</div>
        <p className="text-sm">Rating: {rating}</p>
        <div className="w-30 my-3">
          <div className="text-ls">Platform: </div>
          {platforms.map((p, i) => (
            <p key={i + p.platform.name} className="text-sm">
              {p.platform.name}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
}
