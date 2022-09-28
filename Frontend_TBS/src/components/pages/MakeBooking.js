import React, { Component } from 'react';
import BookingService from '../../services/BookingService';

class MakeBooking extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: JSON.parse(sessionStorage.getItem('loggedInUser')),
            turf: JSON.parse(sessionStorage.getItem('selectedTurf')),
            timeslot: '',
            paymentstatus: true ,
            bookingstatus:  false,
            managerId: JSON.parse(sessionStorage.getItem('loggedInUser'))
        }
    }


    saveBooking = (u) => {
        u.preventDefault();
        let booking = {
            user: this.state.user,
            turf: this.state.turf,
            timeslot: document.getElementById('timeslot').value,
            paymentstatus: this.state.paymentstatus,
            bookingstatus: this.state.bookingstatus,
            managerId: this.state.managerId
        };

        console.log('booking => ' + JSON.stringify(booking));

        BookingService.makeBooking(booking).then(res => {
            window.open("https://www.paypal.com/in/home");
            alert("The turf has been booked");
            this.props.history.push('/showallturfs');
        })

    }

    cancel() {
        this.props.history.push('/showallturfs');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Booking Slot</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                    <div className="form-group">
                                        <label> Time Slot: </label>

                                        <select name="timeslot" id="timeslot">
                                            <option value='6to9'>6AM to 9AM </option>
                                            <option value="9to12">9AM to 12PM</option>
                                            <option value="12to3">12PM to 3PM</option>
                                            <option value="3to6">3PM to 6PM</option>
                                            <option value='6to9'>6PM to 9PM </option>
                                        </select>
                                    </div>

                                    <label> Date: </label>
                                    <div className= "from-group">
                                        <input type="date" min={new Date()}/>
                                    </div>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveBooking}>Book</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default MakeBooking;