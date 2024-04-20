import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/Home";
import Error from "../views/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;
