import { Routes, Route } from "react-router-dom";
import { routes } from "./routes-data";
import React from "react";
import ProfilePage from "../pages/ProfilePage";

export default function RoutesRender() {
  return (
    <>
      <Routes>
        {routes.map(({ path, Element }, index) => (
          <Route key={path + index} path={path} element={<Element />} />
        ))}
      </Routes>
    </>
  );
}
