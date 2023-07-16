import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default PrivateRoute;
