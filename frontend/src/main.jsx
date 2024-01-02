import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
/* import Login from "./pages/Login/Login"; */
import Homepage from "./pages/Homepage/Homepage";
/* 
import Decision from "./pages/Decision/Decision"
import CreateDecision from "./pages/CreateDecision/CreateDecision";
import NewUsers from ".pages/NewUsers/NewUsers";
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    /* element: <Login /> */
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
          {
        path: "/newuser",
        element: <NewUsers />,
      },
      */
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
