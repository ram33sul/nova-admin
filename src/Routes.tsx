import { lazy } from "react";
export const routePaths = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  REPORT: "/report",
};

const Home = lazy(() => import("./pages/home/home"));
const Login = lazy(() => import("./pages/login/login"));
const NotFound = lazy(() => import("./pages/notfound/notfound"));
const Signup = lazy(() => import("./pages/signup/signup"));
const Report = lazy(() => import("./pages/report/report"));

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
    path: routePaths.REPORT,
    element: <Report />,
    shouldLogin: true,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
