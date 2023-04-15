import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  async function createNewUser(e) {
    e.preventDefault();
    let newUser = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    let response = await axios.post("http://localhost:8000/signup", newUser);
    console.log(response);
    // catch an error from database
    if (response.data.msg) {
      alert(response.data.msg);
    }
    // if we receive the token, we save it to localStorage and we have an access to it from all the components 
    if (response.data.newUser) {
      // localStorage.setItem("token", response.data);
      navigate("/login");
    }
  }

  return (
    <div className="signupformcontainer">
      <div className="signupform">
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
          {/* <label htmlFor="checkbox"></label>
          <input type="checkbox" />
          <span class="checkmark">
            I agree with the{" "}
            <a href="/terms" id="checkmark">
              terms & conditions
            </a>
            <br></br>for the contest
          </span>
          <br />
          <br /> */}
          <button type="submit">
            <span>Sign Up</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;