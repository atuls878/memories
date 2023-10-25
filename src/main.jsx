import React from "react";
import ReactDOM from "react-dom/client";
import Login from './routes/Login.component/Login'
import Home from './routes/Home.component/Home'
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path:'/Home',
    element: <Home />,
  },
  // {
  //   path:'/signup',
  //   element: <Signup />,
  // }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
