import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Department = () => {
  const [department, setDepartment] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/departments?populate=*")
      .then((response) =>  setDepartment(response.data.data));
  },[]);

  return (
    <>
    <h2>names</h2>
     {
      department.map((x)=>{
        console.log(x);
       return (
        <h1>{x.attributes.name}</h1>
        )
      })
     }
    </>
  );
};

export default Department;
