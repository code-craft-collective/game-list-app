import ErrorPage from "../pages/ErrorPage";
import GamesList from "../pages/GamesList";
import ProfilePage from "../pages/ProfilePage";
import AboutPage from "../pages/AboutPage";
import GameDetailsPage from "../pages/GameDetailsPage";

export const routes = [
  { path: "*", Element: ErrorPage },
  { path: "/", Element: GamesList },
  { path: "/profile", Element: ProfilePage },
  { path: "/games", Element: GamesList },
  { path: "/games/:gameID", Element: GameDetailsPage },
  { path: "/About", Element: AboutPage },
];
