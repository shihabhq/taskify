import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadinStatusChange, userLogin } from "../store/slices/AuthSlice";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  if (user && user.isLoggedIn) {
    return children;
  }
  return <Navigate to={"/login"} />;
};

export default PrivateRoute;
