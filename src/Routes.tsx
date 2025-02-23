import Home from "./pages/home/home";
import Login from "./pages/login/login";
import NotFound from "./pages/notfound/notfound";
import Signup from "./pages/signup/signup";

export const routePaths = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
};

const routes = [
  {
    path: routePaths.HOME,
    element: <Home />,
    shouldLogin: true,
  },
  {
    path: routePaths.LOGIN,
    element: <Login />,
    shouldLogout: true,
  },
  {
    path: routePaths.SIGNUP,
    element: <Signup />,
    shouldLogout: true,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
