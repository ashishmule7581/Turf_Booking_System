import axios from 'axios'

const TURF_REST_API_URL = "http://localhost:8080/turf/turfcontroller/addturf";

class TurfService{

    addTurf(turf){
        return axios.post(TURF_REST_API_URL, turf);
    }

}

export default new TurfService();