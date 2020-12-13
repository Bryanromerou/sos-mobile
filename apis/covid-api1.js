import axios from 'axios';
const url = "https://api.covidtracking.com/v1/us/daily.json"

export default class {
    static all(){
        return axios.get(url);
    }
}
