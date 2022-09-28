import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import ContactUs from './components/ContactUs';
import SuccessfullyBooked from './components/pages/SuccessfullyBooked';
import SuccessfullyChallengeAccepted from './components/pages/SuccessfullyChallengeAccepted';
import SuccessConnect from './components/pages/SuccessConnect';
import AddTurfs from './components/pages/Admin/AddTurfs';
import ManagerNavbar from './components/ManagerNavbar';
import AdminNav from './components/pages/Admin/AdminNav';
import MakeBooking from './components/pages/MakeBooking';
import Turfs from './components/pages/Admin/Turfs';
import ShowAllTurfs from './components/pages/ShowAllTurfs';
import UserNavbar from './components/UserNavbar';
import ShowAllTurfsAdmin from './components/pages/Admin/ShowAllTurfsAdmin';
import AllUsers from './components/pages/AllUsers';

function App() {

  let nav;

  if (sessionStorage.getItem("loggedInUser") === null) {
    nav = <Navbar />;
  }
  else if (JSON.parse(sessionStorage.getItem("loggedInUser")).role === 'user') {
    nav = <UserNavbar />;
  }
  else if (JSON.parse(sessionStorage.getItem("loggedInUser")).role === 'manager') {
    nav = <ManagerNavbar />;
  }
  else if (JSON.parse(sessionStorage.getItem("loggedInUser")).role === 'admin') {
    nav = <AdminNav />;
  }

  return (
    <>
      <Router>

        {nav}

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/login' component={Login} />
          <Route path='/home' exact component={Home} />
          <Route path='/addturfs' component={AddTurfs} />
          <Route path='/allusers' component={AllUsers} />
          <Route path='/turfs' component={Turfs} />
          <Route path='/makebooking' component={MakeBooking} />
          <Route path='/showallturfs' component={ShowAllTurfs} />
          <Route path='/showallturfsAdmin' component={ShowAllTurfsAdmin} />
          <Route path='/booked' component={SuccessfullyBooked} />
          <Route path='/challenge-accepted' component={SuccessfullyChallengeAccepted} />
          <Route path='/connect' component={SuccessConnect} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
