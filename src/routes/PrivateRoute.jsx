import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { status } = useSelector((state) => state.auth);

  if (status && status?.isLoggedIn) {
    return children;
  }
  return <Navigate to={"/login"} />;
};

export default PrivateRoute;
