import React from "react";
import "./in.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "bulma/css/bulma.css";
import { Link} from "react-router-dom";

export const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:3001/users");
    setUsers(response.data);
  };

  const deletUser = async (id)=> {
    let validasi = window.confirm("apakah benar, contact akan di hapus?");
    if (validasi === true )    {
        await axios.delete(`http://localhost:3001/users/${id}`)
        getUsers();
            alert ('data akan terhapus');
      }
  }

  return (
    <div className="in">
    <div className="columns ">
      <div className="column ">

        <Link to={`add`} className="button is-success">Tambah data</Link>

        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>#</th>
              <th>Nama Lengkap</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link to={`edit/${user.id}`} className="button  is-info">Edit</Link>
                  <Link onClick={()=>deletUser(user.id)} className="button  is-danger">Hapus</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};
