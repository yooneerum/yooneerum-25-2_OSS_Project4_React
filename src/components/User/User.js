import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./User.css";
const EditUser = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const getUserApi = "https://68dfbc80898434f41358c319.mockapi.io/user";

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get(getUserApi.concat("/") + id)
      .then((item) => {
        setUser(item.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="user mt-5">
      <table className="table table-bordered">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Name</td>
        <td>{user.name}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>{user.email}</td>
      </tr>
      <tr>
        <td>Phone</td>
        <td>{user.phone}</td>
      </tr>
      <tr>
        <td>Age</td>
        <td>{user.age}</td>
      </tr>
      <tr>
        <td>Address</td>
        <td>{user.address}</td>
      </tr>
      <tr>
        <td>Nation</td>
        <td>{user.nation}</td>
      </tr>
    </tbody>
  </table>
    </div>
  );
};
export default EditUser;
