import { Navigate, useRoutes } from "react-router-dom";
import { HomePage, TestPage } from "./elements";

export default function Router() {
  return useRoutes([
    {
      path: "/home",
      children: [
        { path: "", element: <HomePage /> },
        { path: "test/:d", element: <TestPage /> },
      ],
    },

    {
      path: "*",
      element: <Navigate to="/home" replace />,
    },
  ]);
}
