import axios from 'axios';

// Default config for AXIOS

if(sessionStorage.getItem('token') !== null){
    const token: string = sessionStorage.getItem('token') as string;
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export default axios.create(
    {
        baseURL: 'http://localhost:8080/',
        responseType: 'json',
        // timeout: 10000,
    }
)