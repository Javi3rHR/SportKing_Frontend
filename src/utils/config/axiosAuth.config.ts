import axios from 'axios';

// Default config for AXIOS
export default axios.create({
	baseURL: 'http://localhost:8080/',
	responseType: 'json',
	headers: {'Authorization': `Bearer ${sessionStorage.getItem('token') ?? ''}`},
	timeout: 10000,
});
