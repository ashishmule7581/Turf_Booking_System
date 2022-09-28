import axios from 'axios'

const USER_REST_API_URL = "http://localhost:8080/turf/authentication/";

class UserService{

    createUser(user){
        return axios.post(USER_REST_API_URL + "register", user);
    }

    loginUser(loginCred){
        return axios.post(USER_REST_API_URL + "login", loginCred);
    }

}

export default new UserService();