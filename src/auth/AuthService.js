import axios from 'axios';

const API_URL = 'http://localhost:8250/api/v1/login';
const API_R_URL = 'http://localhost:8250/api/v1/register';

const login = async (username, password) => {
  const response = fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.status) {
        localStorage.setItem('token', response.data);
      } else {
        localStorage.setItem('token', 'null');
      }
    })
    .catch((err) => console.log(err));
  return response;
};

const logout = () => localStorage.removeItem('token');

const register = (username, password, email, roleName) => {
  axios.post(API_R_URL, {
    username,
    password,
    email,
    roleName,
  });
};

const getCurrentUser = () => JSON.parse(localStorage.getItem('token'));

const AuthService = {
  login,
  logout,
  register,
  getCurrentUser,
};

export default AuthService;
