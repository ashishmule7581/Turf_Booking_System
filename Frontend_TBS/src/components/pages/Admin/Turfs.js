import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import AdminNav from "./AdminNav";

const Turfs = () => {
 
  // maintain the state
  const [turfs, setTurfs] = useState([]);

  useEffect(() => {
    console.log(`Turf component got loaded`);
    getTurfs();
  }, []);

  const getTurfs = () => {
    axios.get("http://localhost:8080/turf/turfcontroller/getAllTurfs").then((response) => {
      setTurfs(response.data);
    });
  };

  const deleteTurf = (id) => {
    

    // send the data to the API
    axios.delete(`http://localhost:8080/turf/turfcontroller/getAllTurfs/${id}`).then((response) => {
      
        setTurfs(response.data);

    })
  }

  return (
    <div>
      <AdminNav/>
      <h1 className="page-title">
        <i>Turfs</i>
      </h1>
      <hr></hr>

      <Link to="/addturf">
        <a className="btn btn-success" href=" ">
          Add Turfs
        </a>
      </Link>

      <hr></hr>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Turf Id</th>
            <th>City</th>
            <th>Address</th>
            <th>turfMagager</th>
            <th>Ground Name</th>
          </tr>
        </thead>
        <tbody>
          {turfs.map((turf) => {
            return (
              <tr>
               <td>
                    {turf.turfId} 
                  </td>
                  <td>
                    {turf.city} 
                  </td>
                  <td>
                    {turf.address} 
                  </td>
                  <td>
                    {turf.turfMagager} 
                  </td>
                  <td>
                    {turf.groundname} 
                  </td>                  
                <td>              
               
                <a type="button" 
                onClick = {()=>{
                  deleteTurf(turf.turfid)
                }}>
                 <img src="https://img.icons8.com/small/64/000000/filled-trash.png" style={{width: "30px", height: "30px", opacity: "0.6" }}/>
                </a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Turfs;
