import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, user }) => {
  if (!user.name) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
