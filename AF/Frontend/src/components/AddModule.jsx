import axios from "axios";
import React, { useState } from "react";

const AddModule = () => {
  const [moduleName, setModuleName] = useState();
  const [duration, setDuration] = useState();
  const [lecturerIds, setLecturerIds] = useState();
  const [academicYear, setAcademicYear] = useState();

  const onAddModule = (e) => {
    e.preventDefault();
    const newModule = {
      moduleName,
      duration,
      lecturerIds,
      academicYear,
    };
    axios.post("http://localhost:5000/Module/", newModule).then((res) => {
      if (res.data.success) {
        alert("Module added.....!");
      }
    });
  };

  return (
    <div>
      <h3>Add Product</h3>
      <form onSubmit={onAddModule}>
        Module Name :
        <input
          type="text"
          onChange={(e) => {
            setModuleName(e.target.value);
          }}
        />
        <br /> <br />
        Duration :
        <input
          type="text"
          onChange={(e) => {
            setDuration(e.target.value);
          }}
        />
        <br /> <br />
        Lecturers :
        <input
          type="text"
          onChange={(e) => {
            setLecturerIds(e.target.value);
          }}
        />
        <br /> <br />
        Academic Year :
        <input
          type="text"
          onChange={(e) => {
            setAcademicYear(e.target.value);
          }}
        />
        <br /> <br />
        <input type="submit" value="Add Module" />
      </form>
    </div>
  );
};

export default AddModule;
