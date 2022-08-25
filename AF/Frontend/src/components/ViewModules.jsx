import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewModules() {
  const [modules, setModules] = useState([]);

  //Get all Students
  const getModules = async () => {
    const res = await axios.get("http://localhost:5000/Module/");
    setModules(res.data);
  };

  useEffect(() => {
    getModules();
  }, []);

  //Delete Handler
  function deleteHandler(_id) {
    axios
      .delete(`http://localhost:5000/Module/${_id}`)

      .then((res) => {
        alert("Module Deleted!");
      })

      .catch();
  }

  return (
    <div>
      <span>All Modules</span>
      <br />
      <br />
      <div
        style={{
          display: "flex",
        }}
      >
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <br />
          {modules?.map((lec) => {
            <div key={lec.id}>
              <div>{lec.moduleName}</div>
              <span onChange={deleteHandler}>Delete</span>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default ViewModules;
