import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  //Use Navigate Initialize
  const navigate = useNavigate();

  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userType, setUserType] = useState();
  const [other, setOther] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    const UserDetails = { userName, email, password, userType, other };

    console.log(UserDetails);

    axios
      .post("http://localhost:5000/Users", UserDetails)
      .then((res) => {
        if (res.data.success) {
          alert("User Registration Successful....!");
          navigate("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={submitHandler}>
        <label>
          User Name:
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
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
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Role:
          <select
            name="role"
            id="role"
            onChange={(e) => {
              setUserType(e.target.value);
            }}
          >
            <option value="Student">Student</option>
            <option value="Admin">Admin</option>
            <option value="Lecturer">Lecturer</option>
          </select>
        </label>
        <br />
        <label>
          Other (Contact):
          <input
            type="text"
            name="other"
            onChange={(e) => {
              setOther(e.target.value);
            }}
          />
        </label>
        <br />
        <br />

        <input type="submit" value="Submit" />

        <Link to="/">
          <h6>{"<<< Back to Login"}</h6>
        </Link>
      </form>
    </div>
  );
};

export default Register;
