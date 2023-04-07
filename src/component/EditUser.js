import React from "react";
import "./in2.css";
import { useState , useEffect} from "react";
import axios from "axios";
import { useNavigate ,useParams} from "react-router-dom";



const EditUser = () => {
 const [name, setName] = useState("");
 const [username, setUsername] = useState("");
 const [email, setEmail] = useState("");
 const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=> {
    getUserById();
  },[])

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3001/users/${id}`,{
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

  const getUserById = async () =>{
    const response = await axios.get(`http://localhost:3001/users/${id}`);
    setName(response.data.name);
    setUsername(response.data.username);
    setEmail(response.data.email);
    setPhone(response.data.phone);
  }

  return (
    <div className="in2">
      <form onSubmit={updateUser}>
        <div className="field">
          <label className="label">Nama Lengkap</label>
          <div className="control"  />
          <input type="text"
            className="input"
            placeholder="Masukan Nama lengkap"
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
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;
