import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PgHome } from "./pages";

export default function getRoutes() {
  const routesList = [
    {
        path: '/',
        element: <PgHome/>
    }
  ]
  return (
    <Router>
      <Routes>
        {
            routesList.map((route, index) => {
                return (
                    <Route key={index} {...route} />
                )
            })
        }
      </Routes>
    </Router>
  );
}
