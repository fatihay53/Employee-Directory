import axios from "axios";


export default class AxiosOperaions {
    static get = (url) => {
       return  axios.get(url);
    }

    // static post = (url) => {
    //     return  axios.post(url);
    // }
}