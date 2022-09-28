import axios from "axios";

import React, { Component } from 'react';

const CHALLENGER_REST_URL="http://localhost:8080/challengers"

class ChallengerService{
    
    createChallenger(challenger){
        return axios.post(CHALLENGER_REST_URL+"/postchallenge" ,challenger )
    }

    getChallenger(){
        return axios.get(CHALLENGER_REST_URL+"/getchallenge")
    }

}

export default new ChallengerService();