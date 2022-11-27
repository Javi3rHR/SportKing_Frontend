import axios from '../utils/config/axios.config';

/* GET */

export const getUsers = async () => {
    return await axios.get('/users');
}

export const getUserById = async (id: number) => {
    return await axios.get(`/users/${id}}`);
}

export const getUserByUsername = async (username: string) => {
    return await axios.get(`/users/usernamee/${username}}`);
}


/* PUT */

export const updateUser = async (id: number) => {
    return await axios.put(`/users/${id}`);
}

/* DELETE */

export const deleteUser = async (id: number) => {
    return await axios.delete(`/users/${id}`);
}

export const deleteCurrentUser = async (username: string) => {
    return await axios.delete(`/users/username/${username}`);
}