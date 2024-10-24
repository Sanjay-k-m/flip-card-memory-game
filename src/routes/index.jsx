import { Navigate, useRoutes } from "react-router-dom";
import { GamePage, HomePage } from "./elements";

export default function Router() {
  return useRoutes([
    {
      path: "/home",
      children: [
        { path: "", element: <HomePage /> },
        { path: "game", element: <GamePage /> },
      ],
    },

    {
      path: "*",
      element: <Navigate to="/home" replace />,
    },
  ]);
}
