import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function GuestRoute() {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  const from = location.state?.from?.pathname || "/blog";
  console.log(isAuthenticated);
  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  return <Outlet />;
}
