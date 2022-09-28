import React, { Component } from 'react';
import ChallengerService from '../services/ChallengerService';
import { Link } from 'react-router-dom';
class Announcement extends Component {
    constructor(props){
        super(props)

        this.state={
            challenger:[]
        }
    }
    componentDidMount(){
        ChallengerService.getChallenger().then((res)=>{
            this.setState({challenger:res.data});
        })
    }
    

    render() {
        return (
            <div>
               
                <br></br>
                 <br></br>
                <h2 className="text-center">Challenger's Around You</h2>
                 <div className = "row">
                        <table className = "table table-striped table-bordered" >

                            <thead >
                                <tr>
                                    <th></th>
                                    <th>Team Name</th>
                                    <th>Location</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Reward</th>
                                    <th>Sports Name</th>
                                    <th>Contact Person</th>
                                    <th>Contact Number</th>
                                    <th>Accept Challenge</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.challenger.map(
                                        challenger => 
                                        <tr key = {challenger.id}>
                                            <td></td>
                                             <td> {challenger.teamname} </td>   
                                             <td> {challenger.location}</td>
                                             <td> {challenger.date}</td>
                                             <td> {challenger.time}</td>
                                             <td> {challenger.reward}</td>
                                             <td> {challenger.sportsname}</td>
                                             <td> {challenger.contactperson}</td>
                                             <td> {challenger.contactnumber}</td>
                                             <td>
                                                 {/* <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button> */}
                                                  {/* <button className="btn btn-info">Accept Challenge </button> */}

                                                  <Link to='/challenge-accepted'>
                                                    <button className="btn btn-info">Accept Challenge</button>

                                                </Link>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>


            </div>
        );
    }
}

export default Announcement;
