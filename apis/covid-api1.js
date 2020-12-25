import axios from 'axios';
const url = "https://api.covidtracking.com/v1/us/daily.json";


export default class {
    static all(){
        return axios.get(url);
    }
    static byStateAbr(state){
        return axios.get(`https://api.covidtracking.com/v1/states/${state}/current.json`);
    }
    static jan(){
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RhcGkxIiwiaWF0IjoxNjA3ODQyMDU3LCJleHAiOjE2MDgwNDIwNTd9.mArAQxdDMFRRUP92enQWLe6uSNHjgi7y4oC2gPqIQY0"
        var config = {
            method: 'get',
            url: 'https://covid19.cloudeya.org/jun2020',
            headers: { 
              'Content-Type': 'application/json',
              "Authorization": `Bearer ${token}`
            }
        };
        return axios(config)
    }
    static stateHistory(state){
        return axios.get(`https://api.covidtracking.com/v1/states/${state}/daily.json`);
    }
}