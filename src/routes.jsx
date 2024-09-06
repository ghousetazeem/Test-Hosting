import { Home, Profile, SignIn, SignUp } from "@/pages";
import Dashboard from "./pages/dashboard";
import Success from "./pages/success";
import PaymentCancelled from "./pages/failed";

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
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/cancelled",
    element: <PaymentCancelled />,
  },
];

export default routes;
