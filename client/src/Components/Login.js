// The purpose of this code is to create a React component that renders a login form and handles the user authentication process. It checks if there is a token in the local storage, sends an HTTP request to the server with the username and password, saves the token to the local storage if it receives one, and navigates the user back to their previous page.

import { useRef } from "react";
import axios from "axios";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { from = "/" } = state || {};
  const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/" />;
  }

  async function login(e) {
    e.preventDefault();
    let user = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    let response = await axios.post(
      "https://videoclub-server.vercel.app/login",
      user
    );
    
    if (response.data.msg) {
      return alert(response.data.msg);
    }
    // if we receive the token, we save it to localStorage and we have an access to it from all the components
    if (response) {
      localStorage.setItem("token", response.data);
      navigate(from);
    }
  }

  return (
    <div className="formcontainer">
      <div className="form">
        <form onSubmit={login}>
          <h1>Login</h1>
          <label htmlFor="username"></label>
          <input
            id="username"
            type="text"
            ref={usernameRef}
            placeholder="Username"
          />
          <br></br>
          <br></br>
          <label htmlFor="password"></label>
          <input
            id="password"
            type="text"
            ref={passwordRef}
            placeholder="Password"
          />
          <br />
          <br />
          <button type="submit">
            <span>Login</span>
          </button>
          <br />
          <br />

          <span>
            New user? <a href="/signup">create account</a>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;





