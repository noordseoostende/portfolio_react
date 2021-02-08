/* eslint-disable no-undef */
import axios from 'axios';

const host = 'http://localhost:8080';
const API = {
  login: (email, pass, success) => {
    axios.post(`${host}/api/users/login`, {email: email, password: pass})
    .then(res => {
      success(res);
    });

  },
  getUsers: (token, succes) => {
    axios.get(`${host}/api/users?access_token=${token}`)
    .then(res => {
        success(res);
    })
  },
  getPosts: (token, succes) => {
    axios.get(`${host}/api/Posts?access_token=${token}`)
    .then(res => {
      succes(res);
    })
  }
}

export default API;