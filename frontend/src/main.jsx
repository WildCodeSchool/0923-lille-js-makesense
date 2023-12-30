import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import NewUsers from "./components/NewUsers/NewUsers";
import Homepage from "./pages/Homepage/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/NewUsers",
    element: <NewUsers />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
