import axios from "axios";

const TEAMMATE_REST_URL = "http://localhost:8080/teamfinder";

class TeammateFinderService{

    createTeammateFinder(teammatefinder){
        return axios.post(TEAMMATE_REST_URL+"/post" ,teammatefinder )
    }

    getTeammateFinder(){
        return axios.get(TEAMMATE_REST_URL+"/get")
    }

}

export default new TeammateFinderService();