import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import AdminNav from "./AdminNav";

import '../../../components/Navbar.css';

const ShowAllTurfsAdmin = () => {

    // maintain the state
    const [turfs, setTurfs] = useState([]);

    useEffect(() => {
        console.log(`Turf component got loaded`);
        getTurfs();
    }, []);

    const getTurfs = () => {
        axios.get("http://localhost:8080/turf/turfcontroller/getAllTurf").then((response) => {
            setTurfs(response.data);
        });
    };

    return (
        <div>
            {/* <AdminNav /> */}
            <h1 className="page-title">
                <i>Turfs</i>
            </h1>
            <hr></hr>

            <Link to="/AddTurfs">
                <a className="btn btn-success" href="">
                    Add Turfs
                </a>
            </Link>
            <Link to="/allusers">
                <a className="btn btn-success" href="">
                    Show All Users
                </a>
            </Link>

            <hr></hr>
            <table className="table table-striped">
                <thead>
                    <tr>
                        {/* <th>Turf Id</th> */}
                        <th>City</th>
                        <th>Address</th>
                        {/* <th>turfMagager</th> */}
                        <th>Ground Name</th>
                    </tr>
                </thead>
                <tbody>
                    {turfs.map((turf) => {
                        return (
                            <tr>
                                {/* <td>
                                    {turf.turfId}
                                </td> */}
                                <td>
                                    {turf.city}
                                </td>
                                <td>
                                    {turf.address}
                                </td>
                                {/* <td>
                                    {turf.turfMagager}
                                </td> */}
                                <td>
                                    {turf.groundname}
                                </td>
                                {/* <td>

                                    <button type="button"
                                        onClick={() => {
                                            sessionStorage.setItem('selectedTurf', JSON.stringify(turf));

                                            window.location.href = '/makebooking';
                                        }}>
                                        book
                                    </button>
                                </td> */}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ShowAllTurfsAdmin;
