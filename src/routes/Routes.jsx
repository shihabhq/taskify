import { Route, Routes } from "react-router";
import AuthPage from "../pages/auth/AuthPage";
import PrivateRoute from "./PrivateRoute";
import App from "../App";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<AuthPage />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <App />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
