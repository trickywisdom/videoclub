import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function Navbar() {
  let token = null;
  token = localStorage.getItem("token");
  const navigate = useNavigate();
  let decoded;

  if (token) {
    try {
      decoded = jwt_decode(token);
    } catch (error) {
      localStorage.removeItem("token");
      navigate("/");
    }
  }

  function checkToken() {
    try {
      if (!token) {
        navigate("/login");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
    
  }

  function logout() {
    localStorage.removeItem("token");
  }

  if (!token) {
    return <Navigate to="/login" />;
  }
  
  return (
    <div className="navbar">
      <nav>
        <Link onClick={checkToken}>Home</Link>
      </nav>
      <nav>
        {token ? (
          <>
            <Link to="#">{decoded ? decoded.username : null}</Link>
            <Link to="#">Saved Movies</Link>
            <Link onClick={logout} to="/login">
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
