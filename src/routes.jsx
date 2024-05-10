import { Home, Profile, SignIn, SignUp } from "@/pages";
import Dashboard from "./pages/dashboard";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  // {
  //   name: "profile",
  //   path: "/profile",
  //   element: <Profile />,
  // },
];

export default routes;
