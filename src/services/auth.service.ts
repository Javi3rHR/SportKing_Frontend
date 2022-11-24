import axios from '../utils/config/axios.config';
import axiosAuth from '../utils/config/axiosAuth.config';

export const login = async (username: string, password: string): Promise<any> => {
	const body = {
		username,
		password,
	};

	return await axios.post('/users/authenticate', body);
};

export const register = async (username: string, email: string, password: string): Promise<any> => {
	const body = {
		username,
		// name,
		email,
		password,
	};

	return await axios.post('/users/register', body);
};

export const UserByUsername = async (username: string): Promise<any> => {
	return await axiosAuth.get(`/users/username/${username}`);
}