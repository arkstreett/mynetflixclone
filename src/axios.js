import axios from "axios";

// my url to make requests to the database 
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});



export default instance;