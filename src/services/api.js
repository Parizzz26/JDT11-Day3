import axios from "axios";

const api = axios.create({
    // baseURL: 'https://hardi-jdt10.herokuapp.com'
    baseURL: 'https://jsonplaceholder.typicode.com/'
  });

  export default api;