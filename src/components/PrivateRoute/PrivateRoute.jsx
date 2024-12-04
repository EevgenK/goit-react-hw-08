import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "../../redux/auth/selectors";

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(authSelectors.selectLoggedIn);
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
