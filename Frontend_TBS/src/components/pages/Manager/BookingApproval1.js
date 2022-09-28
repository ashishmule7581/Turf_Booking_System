import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import background from "../../assets/images/background.jpg";
import AdminHeader from './AdminHeader';


export default function ApproveBooking() {

    const baseURL = `https://localhost:8080/api/bookingcontroller/confirmBooking`;

    const location = useLocation();

    const navigate = useNavigate();

    const [approveStatus, setApproveStatus] = useState({});

    function ApproveBooking() {

        let bookingStatusToBeUpdated = {
            Status: document.getElementById('status').value
        };

        setApproveStatus(bookingStatusToBeUpdated);

        // axios
        //     .patch(`${baseURL}/${location.state.bookingId}`, bookingStatusToBeUpdated)
        //     .then((response) => {
        //         setApproveStatus(response.data);
        //         setTimeout(() => {
        //             navigate('/getallbookings');
        //         }, 1000);
        //     });

        // if (!approveStatus) return "No Booking!";

        // console.log(approveStatus);

    }

    return (
        <>
            {/* <ManagerHeader /> */}
            <div style={{ backgroundImage: `url(${background})`, height: '880px', backgroundSize: 'cover', overflow: 'hidden' }}>
                <div className="row justify-content-center">
                    <div className="col-md-5 pt-5 m-5 " id="form-body">

                        <div className="centric-div justify-content-center">
                            <h1>Approve Booking</h1>
                        </div>

                        <form className='my-4'>
                            <div className="form-group my-2">
                                <label className="form-label" for="fullname">Status</label>
                                <input type="text" className="form-control" placeholder='Enter booking status' name="staus" id="status" />
                            </div>

                            <div className='buttons'>
                                <button type='button' className="btn btn-outline-dark my-4 mx-2" onClick={ApproveBooking}>Approve</button>
                                <button type='button' className="btn btn-outline-dark my-4" onClick={() => navigate('/getallbookings')}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}