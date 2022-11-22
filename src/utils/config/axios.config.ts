import axios from 'axios';

// Default config for AXIOS
export default axios.create(
    {
        baseURL: 'http://localhost:8080/',
        responseType: 'json',
        // timeout: 10000,
    }
)