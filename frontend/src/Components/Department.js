import React, { useState } from "react";
import "./Department.css";

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
            <form className="form" onSubmit={handleFormSubmit}>
              <label className="label">
                Name:
                <input
                  className="input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <button className="button" type="submit">
                Submit
              </button>
            </form>
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
