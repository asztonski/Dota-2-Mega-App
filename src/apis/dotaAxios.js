import axios from 'axios';

// Create an instance of axios pre-configured to work with the Open DOTA API
const dotaAxios = axios.create({
  baseURL: 'https://api.opendota.com/api/',
});

export default dotaAxios;
