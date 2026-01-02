import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Home from "./routes/Home.jsx";
import Login from "./routes/Login.jsx";
import Notes from "./routes/Notes.jsx";

import "./index.css";
import App from "./App.jsx";

const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/notes",
          element: <Notes />,
        },
      ],
    },
  ],
  { basename: import.meta.env.REACT_APP_BASENAME }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
