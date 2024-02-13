import ErrorPage from "../pages/ErrorPage";
import GamesList from "../pages/GamesList";
import ProfilePage from "../pages/ProfilePage";
import AboutPage from "../pages/AboutPage";

export const routes = [
  { path: "/", Element: GamesList },
  { path: "/profile", Element: ProfilePage },
  { path: "/Games", Element: GamesList },
  { path: "/About", Element: AboutPage },
  { path: "*", Element: ErrorPage },
];
