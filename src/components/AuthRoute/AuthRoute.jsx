import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function AuthRoute() {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  const from = location.state?.from?.pathname || "/blog";

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: from }} replace />;
  }

  return <Outlet />;
}
