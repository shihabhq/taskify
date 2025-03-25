import AuthPage from "../pages/auth/AuthPage";
import Taskboard from "../pages/taskboard/Taskboard";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<AuthPage />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Taskboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
