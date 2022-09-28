import React, { Component } from 'react';
import UserService from '../../services/UserService';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {

      email: '',
      pass: ''
    }

  }
  formSubmitHandler = event => {
    event.preventDefault()
    console.log(this.state);

    UserService.loginUser(this.state).then(res => {

      console.log(res.data);

      sessionStorage.setItem("loggedInUser", JSON.stringify(res.data));

      if (res.data.role === "admin") {
        setTimeout(() => {
          this.props.history.push('/showallturfsadmin')

        }, 1000);
      }
      else if (res.data.role === "user") {
        setTimeout(() => {
          console.log("User has been added successfully"); 
          this.props.history.push('/showallturfs')
        }, 1000);
      }
    })
  }
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
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
              <h3 className="text-center">Log In</h3>
              <div className="card-body">
                <form onSubmit={this.formSubmitHandler}>
                  <div className="form-group">
                    <label> Email:* </label>
                    <input type='email' required placeholder="Enter email as username" name="email" className="form-control"
                      value={this.state.email} onChange={this.changeEmailHandler} />
                  </div>

                  <div className="form-group">
                    <label> Password:* </label>
                    <input placeholder="Enter Password" type="password" name="pass" className="form-control"
                      value={this.state.pass} onChange={this.changePassHandler} required />
                  </div>

                  <button className="btn btn-success" onClick={this.formSubmitHandler}>Log In</button>
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

export default Login;