import React, { Component } from 'react';
import UserService from '../../services/UserService';

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      pass: '',
      mob: '',
      role: 'user'
    }

    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeMobileHandler = this.changeMobileHandler.bind(this);
    this.changePassHandler = this.changePassHandler.bind(this);

  }


  saveUser = (u) => {
    u.preventDefault();
    let user = { email: this.state.email, firstname: this.state.firstname, lastname: this.state.lastname, mob: this.state.mob, role: this.state.role, pass: this.state.pass };
    console.log('User => ' + JSON.stringify(user));

    UserService.createUser(user).then(res => {
      this.props.history.push('/login');
    })

  }

  changeFirstNameHandler = (event) => {
    this.setState({ firstname: event.target.value });
  }

  changeLastNameHandler = (event) => {
    this.setState({ lastname: event.target.value });
  }

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  }

  changeMobileHandler = (event) => {
    this.setState({ mob: event.target.value });
  }

  changePassHandler = (event) => {
    this.setState({ pass: event.target.value });
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
              <h3 className="text-center">Sign Up Form</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> First Name:* </label>
                    <input placeholder="First Name" name="firstname" className="form-control"
                      value={this.state.firstname} onChange={this.changeFirstNameHandler} />
                  </div>
                  <div className="form-group">
                    <label> Last Name:* </label>
                    <input placeholder="Last Name" name="lastname" className="form-control"
                      value={this.state.lastname} onChange={this.changeLastNameHandler} />
                  </div>

                  <div className="form-group">
                    <label> Mobile:* </label>
                    <input placeholder="Enter Mobile No" name="mob" className="form-control"
                      value={this.state.mob} onChange={this.changeMobileHandler} />
                  </div>

                  <div className="form-group">
                    <label> Email Id:* </label>
                    <input type='email' required placeholder="Email Address" name="email" className="form-control"
                      value={this.state.email} onChange={this.changeEmailHandler} />
                  </div>

                  <div className="form-group">
                    <label> Password:* </label>
                    <input type='password' required placeholder="Enter Password" name="pass" className="form-control"
                      value={this.state.pass} onChange={this.changePassHandler} />
                  </div>

                  <button className="btn btn-success" onClick={this.saveUser}>Sign Up</button>
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

export default SignUp;