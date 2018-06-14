import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.defaults.headers = {"content-type":"application/x-www-form-urlencoded"}
// let instance = axios.create({
//     headers: {"content-type":"application/x-www-form-urlencoded"},

// })

export default axios;
