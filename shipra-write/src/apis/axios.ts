import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://vcw4zbgl-2000.inc1.devtunnels.ms/api/',
});


export default axiosClient;