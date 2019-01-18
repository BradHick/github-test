import axios from 'axios';

const url = 'https://api.github.com/';

export const client = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json'
  }
});