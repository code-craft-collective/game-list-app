import ErrorPage from "../pages/ErrorPage";
import GamesList from "../pages/GamesList";

export const routes = [
  { path: "/", Element: GamesList },
  { path: "*", Element: ErrorPage },
];
