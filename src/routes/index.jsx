import { Routes, Route } from "react-router-dom";
import { routes } from "./routes-data";

export default function RoutesRender() {
  return (
    <>
      <Routes>
        {routes.map(({ path, Element }, index) => (
          <Route key={index} path={path}>
            <Route index element={<Element />} />
          </Route>
        ))}
      </Routes>
    </>
  );
}
