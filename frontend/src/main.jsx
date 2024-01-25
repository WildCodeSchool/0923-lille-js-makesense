import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";

import App from "./App";
import Login from "./pages/Login/Login";
import Homepage from "./pages/Homepage/Homepage";
import Decision from "./pages/Decision/Decision";
import CreateDecision from "./pages/CreateDecision/CreateDecision";
import CreateUser from "./pages/CreateUser/CreateUser";
import UpdateDecision from "./pages/UpdateDecision/UpdateDecision";

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
        path: "/decision/create",
        element: <CreateDecision />,
      },
      {
        path: "/user/create",
        element: <CreateUser />,
      },
      {
        path: "/decision/update",
        element: <UpdateDecision />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
