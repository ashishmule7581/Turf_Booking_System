import axios from "axios";
import { useState, useEffect } from "react";
import { url } from "../../common/constants";
import { Link, useNavigate } from "react-router-dom";
import NavAdmin from "./Adminnav";
import Adminnav from "./Adminnav";

const Users = () => {
  
  // maintain the state
  const [users, setUsers] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    console.log(`Users component got loaded`);
    getUsers();
  }, []);

  const getUsers = () => {
    axios.get(url + "/user").then((response) => {
      setUsers(response.data);
      //setTimeout(navigation("/user"), 1000);
    });
  };
  const resolveGender = (gender) =>{
    if(gender === 0){
      return "Male";
    }else if(gender === 1){
      return "Female";
    }else{
      return "Others";
    }
  }

  const deleteUser = (id) => {
    

    // send the data to the API
    axios.delete(url + `/user/${id}`).then((response) => {
      // const result = response.data
      // if (result.status === 'success') {
        // window.location.reload();
       // alert('successfully deleted user')
        // setTimeout(() => {
        //   navigation('/user');
        // },1000)
        setUsers(response.data);

        // go to the list of brands
        //history.push('/users')
      // } else {
      //   alert('error while deleting user')
      // }
    })
  }

  return (
    <div>
      <Adminnav/>
      <h1 className="page-title">
        <i>Users</i>
      </h1>
      <hr></hr>
      <Link to="/adduser">
        <a className="btn btn-success" href=" ">
          Add User
        </a>
      </Link>

      <hr></hr>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>User Id</th>
            <th>User Name</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Password</th>
            <th>Is Admin ?</th>
            <th>Contact Number</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
             return (
              <tr>
                <td>
                  {user.userId} 
                </td>
                <td>
                  {user.username} 
                </td>
                <td>
                  {user.fullname} 
                </td>
                <td>
                  {resolveGender(user.gender)} 
                </td>
                <td>
                  {user.email} 
                </td>
                <td>
                  {user.password} 
                </td>
                <td>
                  {user.isAdmin ? "Yes" : "No"} 
                </td>
                <td>
                  {user.contactNumber} 
                </td>
                <td>
                <a type="button"
                onClick = {()=>{
                  //console.log(user)
                  navigation('/updateuser', {state:user})
                }}>
                  <img src="https://img.icons8.com/external-line-icons-royyan-wijaya/64/000000/external-edit-gloria-interface-line-ii-line-icons-royyan-wijaya.png" style={{width: "20px", height: "20px", marginRight: "10px"}}/>
                </a>
               
                <a type="button" 
                onClick = {()=>{
                  deleteUser(user.userId)
                 // navigation('/deleteuser', {state:user})
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

export default Users;
