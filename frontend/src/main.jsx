import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Chaussette";
import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import CreateDecision from "./pages/CreateDecision/CreateDecision";
import Decision from "./pages/Decision/Decision";
import NewUser from "./pages/NewUser/NewUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <App />,
    children: [
      {
        path: "/homepage",
        element: <Homepage />,
      },
      {
        path: "/decision",
        element: <Decision />,
      },
      {
        path: "/createdecision",
        element: <CreateDecision />,
      },
      {
        path: "/newuser",
        element: <NewUser />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
