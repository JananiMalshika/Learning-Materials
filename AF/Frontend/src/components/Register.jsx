import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UserRegister = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [other, setOther] = useState("");

  let navigate = useNavigate();

  const onRegister = (e) => {
    e.preventDefault();

    const newuser = {
      userName,
      email,
      userType,
      password,
      other,
    };

    if (password === cpassword) {
      axios
        .post("http://localhost:5000/Users", newuser)
        .then((res) => {
          if (res.data.success) {
            alert("User Registration Successful....!");
            navigate("/");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      alert("Password not match....!");
    }
  };

  return (
    <div>
      <h3>User Register</h3>
      <form onSubmit={onRegister}>
        Full Name :
        <input
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />
        <br />
        Email :
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />
        Password :
        <input
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        Confirm Password :
        <input
          type="text"
          onChange={(e) => {
            setcPassword(e.target.value);
          }}
        />
        <br />
        <br />
        Role :
        <select
          onChange={(e) => {
            setUserType(e.target.value);
          }}
        >
          <option selected>Select Role</option>
          <option value="Admin">Admin</option>
          <option value="Lecturer">Lecturer</option>
          <option value="Student">Student</option>
        </select>
        <br />
        <br />
        Other(Number):
        <input
          type="text"
          onChange={(e) => {
            setOther(e.target.value);
          }}
        />
        <br />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default UserRegister;
