// The purpose of this code is to provide a React component for creating a new user account. It handles the form submission, sending the data to the server, and displaying any errors or redirecting the user based on the response from the server.

import { useRef } from "react";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";

function Signup() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

if (token) {
  return <Navigate to="/" />;
}

  async function createNewUser(e) {
    e.preventDefault();
    let newUser = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    let response = await axios.post(
      "https://videoclub-server.vercel.app/signup",
      newUser
    );
    console.log(response);
    // catch an error from database
    if (response.data.msg) {
      alert(response.data.msg);
    }
    // after sign up, we navigate to the login page
    if (response.data.newUser) {
      navigate("/login");
    }
  }

  return (
    <div className="formcontainer">
      <div className="form">
        <form onSubmit={createNewUser}>
          <h1>Create account</h1>
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
            <span>Sign Up</span>
          </button>
          <br />
          <br />
          <span>
            Already have an account with us? Please <a href="/login">log in</a>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Signup;