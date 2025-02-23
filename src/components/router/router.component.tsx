import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "../../Routes";
import useApi from "../../custom_hooks/useApi";
import { getMe } from "../../api/user_service";
import { useEffect } from "react";
import { setUser } from "../../store/user/actions";
import Loader from "../loader/loader.component";

const HOME = "/";
const LOGIN = "/login";

export default function Router() {
  const { user, loading } = useSelector((state: RootState) => state.user);

  const [fetchedUser, userLoading] = useApi(getMe);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userLoading) {
      dispatch(setUser(fetchedUser));
    }
  }, [userLoading]);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      {routes.map(({ path, element, shouldLogin, shouldLogout }) => {
        const elem =
          shouldLogin && !user ? (
            <Navigate to={LOGIN} />
          ) : shouldLogout && user ? (
            <Navigate to={HOME} />
          ) : (
            element
          );
        return <Route key={path} path={path} element={elem} />;
      })}
    </Routes>
  );
}
