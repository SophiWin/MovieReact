import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Popular from "./pages/Popular.jsx";
import Upcoming from "./pages/Upcoming.jsx";

import Home from "./pages/Home.jsx";
import Signin from "./pages/Signin.jsx";
import Search from "./pages/Search.jsx";
import Details from "./pages/Details.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { path: "", element: <Home /> },
      {
        path: "/signIn",
        element: <Signin />,
      },
      {
        path: "/popular",
        element: <Popular />,
      },
      { path: "/upcoming", element: <Upcoming /> },
      { path: "/details/:id", element: <Details /> },

      { path: "/search/:title", element: <Search /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
