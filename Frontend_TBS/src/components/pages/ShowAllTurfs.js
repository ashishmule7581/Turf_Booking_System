import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import UserNavbar from '../UserNavbar';

import '../../components/Navbar.css';

const ShowAllTurfs = () => {

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
                       
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Address</th>
                        <th>Ground Name</th>
                    </tr>
                </thead>
                <tbody>
                    {turfs.map((turf) => {
                        return (
                            <tr>
                                <td>
                                    {turf.city}
                                </td>
                                <td>
                                    {turf.address}
                                </td>
                                <td>
                                    {turf.groundname}
                                </td>
                                <td>

                                    <button type="button"
                                        onClick={() => {
                                            sessionStorage.setItem('selectedTurf', JSON.stringify(turf));

                                            window.location.href = '/makebooking';
                                        }}>
                                        book
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ShowAllTurfs;
