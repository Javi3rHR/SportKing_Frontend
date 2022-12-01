import axios from '../utils/config/axios.config';

/* GET */
export const getUsers = async (): Promise<any> => {
    const response = await axios.get('/users');
    return response;
}

export const getUserById = async (id: number) => {
    return await axios.get(`/users/${id}}`);
}

export const getUserByUsername = async (username: string) => {
    return await axios.get(`/users/username/${username}}`);
}

/* POST */
export const createUser = async (user: any) => {
    return await axios.post('/users/register', user);
}

/* DELETE */

export const deleteUser = async (id: number) => {
    return await axios.delete(`/users/${id}`);
}

export const deleteCurrentUser = async (username: string) => {
    return await axios.delete(`/users/username/${username}`);
}
