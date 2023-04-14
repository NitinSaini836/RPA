import React, { useState } from "react";
import "./Department.css";

import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

const DepartmentHeader = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleAddDepartment = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Do something with the submitted data (e.g. send to API, update state, etc.)
    console.log("Form submitted with name:", name);
    setSubmittedName(name);
    // Reset form values and hide form
    setName("");
    setShowForm(false);
  };

  return (
    <div>
      <h1 className="header">Department</h1>
      <div style={{ display: "flex" }}>
        <div className="sidebar">
          <button className="button1" onClick={handleAddDepartment}>
            Add Department
          </button>
          {showForm && (
            <FormControl
              style={{
                width: "50%",
                left: "25%",
                top: "25%",
              }}
              variant="standard"
            >
              <InputLabel>Name:</InputLabel>
              <Input
                id="component-simple"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Button
                onClick={handleFormSubmit}
                className="button"
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </FormControl>
          )}
        </div>
        {submittedName && (
          <p
            style={{
              alignSelf: "center",
              marginLeft: "25%",
              fontFamily: "inherit",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Hello! {submittedName}
          </p>
        )}
      </div>
    </div>
  );
};

export default DepartmentHeader;
