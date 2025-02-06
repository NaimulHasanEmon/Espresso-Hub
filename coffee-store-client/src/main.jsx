import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee/UpdateCoffee.jsx";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import AuthProvider from "./providers/AuthProvider.jsx";
import Users from "./components/Users/Users.jsx";
import Main from "../layout/Main.jsx";
import UpdateUser from "./components/UpdateUser/UpdateUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("https://espresso-hub.vercel.app/coffee"),
    element: <Main></Main>,
  },
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "updateCoffee/:id",
    loader: ({ params }) =>
      fetch(`https://espresso-hub.vercel.app/updateCoffee/${params.id}`),
    element: <UpdateCoffee></UpdateCoffee>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/users",
    loader: () => fetch("https://espresso-hub.vercel.app/users"),
    element: <Users></Users>,
  },
  {
    path: "/updateUser/:id",
    loader: ({ params }) =>
      fetch(`https://espresso-hub.vercel.app/updateUser/${params.id}`),
    element: <UpdateUser></UpdateUser>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
