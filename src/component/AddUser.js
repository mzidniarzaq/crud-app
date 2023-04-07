import React from "react";
import "./in2.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
 const [name, setName] = useState("");
 const [username, setUsername] = useState("");
 const [email, setEmail] = useState("");
 const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/users',{
        name,
        username,
        email,
        phone
    });
    navigate("/");
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className="in2">
      <form onSubmit={saveUser}>
        <div className="field">
          <label className="label">Nama Lengkap</label>
          <div className="control"  />
          <input type="text"
            className="input"
            placeholder="Masukan Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>

        <div className="field">
          <label className="label">Username</label>
          <div className="control" />
          <input type="text"
            className="input"
            placeholder="Masukan Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control" />
          <input type="text"
            className="input"
            placeholder="Masukan Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div className="field">
          <label className="label">Phone Number</label>
          <div className="control" />
          <input type="text"
            className="input"
            placeholder="Masukan Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </div>

        <button className="button is-medium is-success mt-5" type="submit">
          Simpan
        </button>
      </form>
    </div>
  );
};

export default AddUser;
