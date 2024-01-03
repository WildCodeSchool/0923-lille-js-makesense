import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import NewUsers from "./components/NewUsers/NewUsers";
/* import Login from "./pages/Login/Login"; */
import Homepage from "./pages/Homepage/Homepage";
/* 
import Decision from "./pages/Decision/Decision"
import CreateDecision from "./pages/CreateDecision/CreateDecision";
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    /* element: <Login /> */
  },
  {
    path: "/newuser",
    element: <NewUsers />,
  },
  {
    element: <App />,
    children: [
      {
        path: "/homepage",
        element: <Homepage />,
      },

      /*  
      {
        path: "/decision",
        element: <Decision />,
      },    
      {
        path: "/createdecision",
        element: <CreateDecision />,
      },
      */
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
