// AdminRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const loggedInUser = JSON.parse(localStorage.getItem("user") || "{}");

  if (loggedInUser.role !== 1) {
    // Agar admin nahi hai to dashboard home pe redirect
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default AdminRoute;
