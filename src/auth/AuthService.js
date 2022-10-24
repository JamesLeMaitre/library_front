import axios from 'axios'

const API_URL = "http://localhost:8250/api/v1/login"
const API_R_URL = "http://localhost:8250/api/v1/register"


const login = async (username, password) => {
    const response = await axios.post(API_URL, {
        username,
        password
    });
    if (response.data.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;

}

const logout = () => {
    localStorage.removeItem("user");
}

const register = (username, password, email, roleName) => {
    return axios.post(API_R_URL, {
        username,
        password,
        email,
        roleName
    })
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}

const AuthService = {
    login,
    logout,
    register,
    getCurrentUser
}

export default AuthService;



