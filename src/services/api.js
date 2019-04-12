import axios from 'axios';

const api = axios.create({
    baseURL : 'https://omnistacks.herokuapp.com/'
})

export default api;