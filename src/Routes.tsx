import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";

const routes = [
  {
    path: "/",
    element: <Home />,
    shouldLogin: true,
  },
  {
    path: "/login",
    element: <Login />,
    shouldLogout: true,
  },
  {
    path: "/signup",
    element: <Signup />,
    shouldLogout: true,
  },
];

export default routes;
