import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ referenceFile, children }) => {
  if (referenceFile !== true) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
