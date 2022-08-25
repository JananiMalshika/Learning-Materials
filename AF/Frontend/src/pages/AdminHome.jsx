import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminHome = () => {
  const [user, setUser] = useState([]);

  const [lecturers, setLecturers] = useState([]);

  //Get all Students
  const getStudents = async () => {
    const res = await axios.get(
      "http://localhost:5000/Users/getByType/Student"
    );
    setUser(res.data);
  };

  //Get all lecturers
  const getLecturers = async () => {
    const res = await axios.get(
      "http://localhost:5000/Users/getByType/Lecturers"
    );
    setLecturers(res.data);
  };

  useEffect(() => {
    getStudents();
    getLecturers();
  }, []);

  //Delete Handler
  function deleteHandler(_id) {
    axios
      .delete(`http://localhost:5000/Users/${_id}`)

      .then((res) => {
        alert("User Deleted!");
      })

      .catch();
  }

  return (
    <div>
      <span>Admin Home</span>
      <br />
      <br />
      <div
        style={{
          display: "flex",
        }}
      >
        <div>All Lecturers</div>
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <br />
          {lecturers?.map((lec) => {
            <div>{lec.userName}</div>;
          })}
        </div>
      </div>

      <div
        style={{
          display: "flex",
        }}
      >
        <div>All Students</div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <br />

          {user?.map((student) => (
            <div key={student.id}>
              <span>{student.userName}</span>

              <button>Edit</button>
              <button onClick={deleteHandler}>Delete</button>
              <br />
            </div>
          ))}
        </div>
      </div>

      <Link to="/addModule">
        <div>
          <button>Add New Module</button>
        </div>
      </Link>
    </div>
  );
};

export default AdminHome;
