import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  //Use Navigate Initialize
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginHandler = (e) => {
    e.preventDefault();

    const LoginUser = { email, password };

    axios
      .post("http://localhost:5000/Users/login", LoginUser)
      .then((res) => {
        if (res.data.success) {
          window.localStorage.setItem("AUTH", res.data.result.token);

          if (res.data.result.userType === "Admin") {
            window.location.href = "/adminHome";
          } else if (res.data.result.userType === "Lecturer") {
            window.location.href = "/lecHome";
          } else {
            window.location.href = "/home";
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <h1>Login</h1>
      <div>
        <form onSubmit={loginHandler}>
          <label>
            Email:
            <input
              type="text"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="email"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />

          <Link to="/register">
            <h6>{"Register from here >>>"}</h6>
          </Link>
        </form>
      </div>

      <Link to="/addModule">
        <div>
          <button>Add New Module</button>
        </div>
      </Link>

      <Link to="/viewModules">
        <div>
          <button>View All Modules</button>
        </div>
      </Link>
    </div>
  );
}

export default Login;
