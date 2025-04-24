

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// ✅ That's it. No need to import AddUser into itself


const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5050/users", {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log("Failed to save user:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="title">Add New User</h2>
      <form onSubmit={saveUser}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="input"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="input"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field mt-4">
          <div className="control">
            <button type="submit" className="button is-primary">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
