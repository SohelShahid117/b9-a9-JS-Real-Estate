import React, { useContext } from "react";
import { authContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();
  console.log(location.pathname);
  console.log(user);
  if (loading) {
    return (
      <span className="border-2 text-orange-500 p-5 font-bold">Loading...</span>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
