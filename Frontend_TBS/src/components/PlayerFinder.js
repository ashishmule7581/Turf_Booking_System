import React, { Component } from 'react';
import TeammateFinderService from '../services/TeammateFinderService';
import { Link } from 'react-router-dom';

class PlayerFinder extends Component {

    constructor(props){
        super(props)

        this.state={
            team_finder:[]
        }
    }

    componentDidMount(){
        TeammateFinderService.getTeammateFinder().then((res) => {
            this.setState({ team_finder: res.data});
        });
    }

    // viewPlayerFinder(id){
    //     this.props.history.push(`/view-playerFinder/${id}`);
    // }

    render() {
        return (
            <div>
                 <div>
               
               <br></br>
                <br></br>
               <h2 className="text-center">Team or Teammates Search</h2>
                <div className = "row">
                       <table className = "table table-striped table-bordered" >

                           <thead >
                               <tr>
                                   <th></th>
                                   <th>Contact Person </th>
                                   <th>Contact Number </th>
                                   <th>Event Date </th>
                                   <th>Event Time</th>
                                   <th>Location</th>
                                   <th>Required Players</th>
                                   <th>Available Players </th>
                                   <th>Sports Name</th>
                                   <th>View Details</th>
                               </tr>
                           </thead>
                           <tbody>
                               {
                                   // this.state.employees.map(
                                   //     employee => 
                                   //     <tr key = {employee.id}>
                                   //          <td> { employee.firstName} </td>   
                                   //          <td> {employee.lastName}</td>
                                   //          <td> {employee.emailId}</td>
                                   //          <td>
                                   //              <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                   //              <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                   //              <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                   //          </td>
                                   //     </tr>
                                   // )

                                   this.state.team_finder.map(
                                    team_finder =>
                                    <tr key ={team_finder.id}>
                                        <td></td>
                                        <td>{team_finder.contactperson}</td>
                                        <td>{team_finder.contactnum}</td>
                                        <td>{team_finder.eventdate}</td>
                                        <td>{team_finder.eventtime}</td>
                                        <td>{team_finder.location}</td>
                                        <td>{team_finder.reqplayer}</td>
                                        <td>{team_finder.availplayer}</td>
                                        <td>{team_finder.sports}</td>

                                        <td>
                                            {/* <button style={{marginLeft: "10px"}} onClick={()=>this.viewPlayerFinder(team_finder.id)} className="btn btn-info">View </button> */}
                                            {/* <button style={{marginLeft: "10px"}} className="btn btn-info">View </button>  */}

                                            <Link to='/connect'>
                                                <button className="btn btn-info">Connect</button>

                                                </Link>
                                          </td>
                                    </tr>
                                   )
                               }
                           </tbody>
                       </table>

                </div>


           </div>
            </div>
        );
    }
}

export default PlayerFinder;