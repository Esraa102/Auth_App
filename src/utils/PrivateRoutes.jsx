import { Outlet, Navigate } from "react-router-dom";
import { UseAuthContext } from "./AuthContext";

const PrivateRoutes = () => {
  const { user } = UseAuthContext();

  return user ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoutes;
