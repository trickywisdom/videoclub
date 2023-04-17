// This code defines a React component called AuthWrapper. It imports three functions from the react-router-dom library: useLocation, Navigate, and Outlet.

// The AuthWrapper component checks if there is a token stored in the local storage. If there is a token, it renders the Outlet component, which is a placeholder for child routes. If there is no token, it renders the Navigate component, which redirects the user to the login page with the current location stored in the state.

// This component is used to protect routes that require authentication. If the user is not authenticated, they will be redirected to the login page.

import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

function AuthWrapper() {
  const location = useLocation();
  const token = localStorage.getItem("token");
  

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default AuthWrapper;

// https://stackoverflow.com/questions/70704613/react-router-dom-navigate-method-is-not-working-properly
