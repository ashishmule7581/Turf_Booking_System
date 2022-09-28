import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminNav from "./Admin/AdminNav";

const AllUsers = () => {
  
  // maintain the state
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    console.log(`Users component got loaded`);
    getUsers();
  }, []);

  const getUsers = () => {
    axios.get("http://localhost:8080/turf/authentication/getAllUsers").then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  };
  

  const deleteUser = (id) => {
    

    // send the data to the API
    axios.delete(`http://localhost:8080/turf/authentication/deleteuser/${id}`).then((response) => {
      
        setUsers(response.data);

        
    })
  }

  return (
    <div>
      {/* <AdminNav/> */}
      <h1 className="page-title">
        <i>Users</i>
      </h1>
      <hr></hr>

      <hr></hr>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>password</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
             return (
              <tr>
                <td>
                  {user.email} 
                </td>
                <td>             
                  {user.firstname}            
                </td>
                <td>             
                  {user.lastname}            
                </td>
                <td>
                  {user.pass} 
                </td>
                <td>
                  {user.role}
                  </td>                  
                
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;