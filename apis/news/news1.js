import axios from 'axios';
const API_KEY = ""
const url = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`

export default class {
    static all(){
        return axios.get(url);
    }
    static byStateAbr(countryQuery){
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=${countryQuery}&q=covid&apiKey=${API_KEY}`
        );
    }
}