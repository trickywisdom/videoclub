import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    let user = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    let response = await axios.post("http://localhost:8000/login", user);
    console.log(response);
    // catch an error from database
    if (response.data.msg) {
      return alert(response.data.msg);
    }
    // if we receive the token, we save it to localStorage and we have an access to it from all the components 
    if (response) {
      localStorage.setItem("token", response.data);
      navigate("/home");
    }

  }

  return (
    <div classusername="formcontainer">
      <div classusername="form">
        <form onSubmit={login}>
          <h1>Login</h1>
          <label htmlFor="username"></label>
          <input
            id="username"
            type="text"
            ref={usernameRef}
            placeholder="username"
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
            New user?{" "}
            <a href="/signup">
              create account
            </a>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
