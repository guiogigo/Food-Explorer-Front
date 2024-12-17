import axios from 'axios';

export const api = axios.create({
    //baseURL: "https://food-explorer-api-2zqt.onrender.com"
    baseURL: "http://localhost:3333"
})
