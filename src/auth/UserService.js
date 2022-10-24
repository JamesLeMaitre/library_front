import React from 'react'
import axios from 'axios'
import authHeader from './authHeader'

const API_RAYONS = "http://localhost:8250/api/v1/rayons/";
const API_BASE_URL = "http://localhost:8250/api/v1/";

// Add a request interceptor
axios.interceptors.request.use(config => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.data) {
        const token = user.data;
        config.headers['x-access-token'] = token;
    }
    return config;
})
class UserService {

    // Get All Rayons
    async getAllRayons() {
        return await axios.get(API_RAYONS + "getAll" + { headers: authHeader() })
    }

    async getAllUsers() {
        return await axios.get(API_BASE_URL + "list" + { headers: authHeader() })
    }

    async getRayonsById() {
        return await axios.get(API_RAYONS + "")
    }


}

export default new UserService();