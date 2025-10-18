// AdminRoute.tsx
import { Navigate } from "react-router-dom";

import React from 'react';
const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const loggedInUser = JSON.parse(localStorage.getItem("user") || "{}");

  if (loggedInUser.role !== 1) {
    // Agar admin nahi hai to dashboard home pe redirect
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default AdminRoute;
