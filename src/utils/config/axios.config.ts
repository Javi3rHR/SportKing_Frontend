import axios from 'axios';

// Default config for AXIOS
export default axios.create(
    {
        baseURL: 'https://localhost:8080/',
        responseType: 'json',
        timeout: 6000
    }
)