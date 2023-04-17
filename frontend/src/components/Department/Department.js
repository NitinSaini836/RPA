import React from "react";
import { useState, useEffect } from "react";
import "./Department.css";
import axios from "axios";

const Department = () => {
  const [department, setDepartment] = useState([]);
  const token = localStorage.getItem("jwt");
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/departments?populate=*", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setDepartment(response.data.data));
  }, []);
  let userData = localStorage.getItem("user");
  userData = JSON.parse(userData);
  console.log(userData);

  return (
    <>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>isUpdatedBy</th>
              <th>Assigned Resources</th>
            </tr>
          </thead>
          <tbody>
            {department.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.id}</td>
                  <td>{val.attributes.name}</td>
                  <td>{userData.username}</td>
                  <td>{val.attributes.resources.data.length}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Department;
