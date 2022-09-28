import React, { Component } from 'react';
import TurfService from '../../../services/TurfService';

class AddTurfs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            city: '',
            groundname: '',

            address: '',
            rentperhour: ''
        }

        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeGroundNameHandler = this.changeGroundNameHandler.bind(this);
        this.changeRentHandler = this.changeRentHandler.bind(this);

    }


    AddTurf = (u) => {
        u.preventDefault();
        let turf = {
            city: this.state.city,
            groundname: this.state.groundname,
            rentperhour: this.state.rentperhour,
            turfManager: JSON.parse(sessionStorage.getItem("loggedInUser")),

            address: this.state.address
        };

        console.log('Turf => ' + JSON.stringify(turf));

        TurfService.addTurf(turf).then(res => {
            this.props.history.push('/ShowAllTurfsAdmin');
        })

    }

    changeCityHandler = (event) => {
        this.setState({ city: event.target.value });
    }

    changeGroundNameHandler = (event) => {
        this.setState({ groundname: event.target.value });
    }

    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }

    changeRentHandler = (event) => {
        this.setState({ rentperhour: event.target.value });
    }

    cancel() {
        this.props.history.push('/');
    }




    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Turf Details</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> City : </label>
                                        <input placeholder="City" name="city" className="form-control"
                                            value={this.state.city} onChange={this.changeCityHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Ground Name : </label>
                                        <input placeholder="Ground Name" name="groundname" className="form-control"
                                            value={this.state.groundname} onChange={this.changeGroundNameHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Address : </label>
                                        <input placeholder="Address" name="address" className="form-control"
                                            value={this.state.address} onChange={this.changeAddressHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Rent per Hour : </label>
                                        <input placeholder="Rent per Hour" name="rentperhour" className="form-control"
                                            value={this.state.rentperhour} onChange={this.changeRentHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.AddTurf}>Add Turf</button>
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

export default AddTurfs;