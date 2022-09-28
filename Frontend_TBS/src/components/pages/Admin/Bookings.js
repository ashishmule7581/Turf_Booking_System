import axios from "axios";
import { useState, useEffect } from "react";
import { url } from "../../common/constants";
import { useNavigate } from "react-router-dom";
import Adminnav from "./Adminnav";


const Bookings = () => {
 
  // maintain the state
  const [bookings, setBookings] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    console.log(`Bookings component got loaded`);
    getBookings();
  }, []);

  const getBookings = () => {
    axios.get(url + "/booking").then((response) => {
      setBookings(response.data);
    });
  };

  const deleteBooking = (id) => { 

    // send the data to the API
    axios.delete(url + `/booking/${id}`).then((response) => {
      setBookings(response.data);
    })
  }

  return (
    
    <div>
      <Adminnav/>
      <h1 className="page-title">
        <i>Bookings</i>
      </h1>
      <hr></hr>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Booking Id</th>
            <th>Seats Count</th>
            <th>Booking DateTime</th>
            <th>Payment Status</th>
            <th>Is Refundable ?</th>
            <th>User Id</th>
            <th>Flight Id</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => {
            return (
              <tr>
                <td>
                  {booking.bookingId} 
                </td>
                <td>
                  {booking.seatsCount} 
                </td>
                <td>
                  {booking.bookingDateTime} 
                </td>
                <td>
                  {booking.paymentStatus} 
                </td>
                <td>
                  {booking.isRefundable ? "Yes" : "No"} 
                </td>
                <td>
                  {booking.userId} 
                </td>
                <td>
                  {booking.flightId} 
                </td>
                <td>
                <a type="button" 
                onClick = {()=>{
                  deleteBooking(booking.bookingId)
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

export default Bookings;
