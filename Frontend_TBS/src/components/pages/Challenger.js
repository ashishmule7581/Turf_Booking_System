import React, { Component } from 'react';
import ChallengerService from '../../services/ChallengerService';

class Challenger extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id: this.props.match.params.id,
            contactnumber:'',
            contactperson:'',
            date:'',
            location:'',
            reward:'',
            sportsname:'',
            teamname:'',
            time:''
        }
       
        this.changeContactPersonMobileHandler=this.changeContactPersonMobileHandler.bind(this);
        this.changeContactPersonHandler=this.changeContactPersonHandler.bind(this);
        this.changedateHandler=this.changedateHandler.bind(this);
        this.changelocationHandler=this.changelocationHandler.bind(this);
        this.changeRewardHandler=this.changeRewardHandler.bind(this);
        this.changesportsnameHandler=this.changesportsnameHandler.bind(this);
        this.changeTeamnameHandler=this.changeTeamnameHandler.bind(this);
        this.changetimeHandler=this.changetimeHandler.bind(this);
    }

    saveChallenger=(c)=>{
        c.preventDefault();
        let challenge = {contactnumber:this.state.contactnumber,contactperson:this.state.contactperson,date:this.state.date,location:this.state.location,reward:this.state.reward,sportsname:this.state.sportsname,teamname:this.state.teamname,time:this.state.time}
        console.log('challenger => ' +JSON.stringify(challenge));

        ChallengerService.createChallenger(challenge).then(res=>{
            this.props.history.push('/services')
        })
    }

    changeContactPersonMobileHandler=(event)=>{
        this.setState({contactnumber:event.target.value});
    }

    changeContactPersonHandler=(event)=>{
        this.setState({contactperson:event.target.value});
    }
    
    changedateHandler=(event)=>{
        this.setState({date:event.target.value});
    }

    changelocationHandler=(event)=>{
        this.setState({location:event.target.value});
    }
    
    changeRewardHandler=(event)=>{
        this.setState({reward:event.target.value});
    }

    changesportsnameHandler=(event)=>{
        this.setState({sportsname:event.target.value});
    }
    
    changeTeamnameHandler=(event)=>{
        this.setState({teamname:event.target.value});
    }

    changetimeHandler=(event)=>{
        this.setState({time:event.target.value});
    }

      cancel(){
        this.props.history.push('/');
      }
  

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Post Challenge </h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Location: </label>
                                            <input placeholder="Enter Location" name="location" className="form-control" 
                                                value={this.state.location} onChange={this.changelocationHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Sports: </label>
                                            <input placeholder="Enter Sports Name" name="sportsname" className="form-control" 
                                                value={this.state.sportsname} onChange={this.changesportsnameHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Team Name: </label>
                                            <input placeholder="Enter Your Team Name" name="teamname" className="form-control" 
                                                value={this.state.teamname} onChange={this.changeTeamnameHandler}/>
                                        </div>


                                        <div className = "form-group">
                                            <label> Reward: </label>
                                            <input placeholder="Enter Reward Money" name="reward" className="form-control" 
                                                value={this.state.reward} onChange={this.changeRewardHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Date: </label>
                                            <input  type="Date" name="date" className="form-control" 
                                                value={this.state.date} onChange={this.changedateHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Time: </label>
                                            <input  type="time" name="time" className="form-control" 
                                                value={this.state.time} onChange={this.changetimeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Contact Person: </label>
                                            <input placeholder="Enter Contact Person Name" name="contactperson" className="form-control" 
                                                value={this.state.contactperson} onChange={this.changeContactPersonHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Contact Number: </label>
                                            <input placeholder="Enter Contact Person Mobile" name="contactnumber" className="form-control" 
                                                value={this.state.contactnumber} onChange={this.changeContactPersonMobileHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.saveChallenger}>Post</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div> 
            </div>
        );
    }
}

export default Challenger;