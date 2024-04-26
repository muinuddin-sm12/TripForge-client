import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex w-full justify-center items-center h-[calc(100vh-308px)]">
        <span className="loading loading-ring loading-lg text-[#03BD5E]"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
};

export default PrivateRoute;
