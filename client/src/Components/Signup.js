import { useRef } from "react";
import axios from "axios";

function Signup({ setQuery }) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  function createNewUser(e) {
    e.preventDefault();
    let newUser = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    // axios
    //   .post("http://localhost:8000/user/create", newUser)
    //   .then((res) => alert(res.data.msg))
    //   .then(setQuery(Math.random()))
    //   .then((usernameRef.current.value = ""))
    //   .then((passwordRef.current.value = ""));
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