import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import background from "../../assets/images/background.jpg"
import AdminHeader from './AdminHeader';


export default function GetAllBookings() {

    const baseURL = `https://localhost:8080/api/bookingscontroller/getbookings`;

    const [allBookingDetails, setAllBookingDetails] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        axios.get(baseURL).then((response) => {

            setAllBookingDetails(response.data);
        });

    }, [baseURL]);

    function deleteBooking(id) {
        axios.delete(`${baseURL}/${id}`).then((response) => {

            setAllBookingDetails(response.data);
        });
    }

    return (
        <div>
            <AdminHeader />
            <div style={{ backgroundImage: `url(${background})`, height: '900px', backgroundSize: 'cover', overflow: 'hidden' }}>
                <div className='m-4 p-3'>
                    <Table className='mt-5' striped bordered hover variant="dark" responsive="sm">
                        <thead>
                            <tr>
                                <th>Booking Id</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {console.log(allBookingDetails)}

                            {
                                allBookingDetails.map((booking) =>
                                    <tr key={booking.bookingId}>
                                        <td>{booking.bookingId}</td>
                                        <td>{booking.status}</td>
                                        <td><button type='button' onClick={() => navigate('/updateuser', { state: booking })}>Edit</button></td>
                                        <td><button type='button' onClick={() => deleteBooking(booking.bookingId)}>Delete</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}