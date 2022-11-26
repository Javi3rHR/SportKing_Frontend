import axios from '../utils/config/axios.config';

/* GETTERS */

export const getUsers = async () => {
    return await axios.get('/users');
}

export const getUserById = async () => {
    return await axios.get('/users/:id');
}

export const getUserByUsername = async () => {
    return await axios.get('/users/usernamee/:username');
}


/* PUT */

export const updateUser = async () => {
    return await axios.put('/users/:id');
}

/* DELETE */

export const deleteUser = async () => {
    return await axios.delete('/users/:id');
}

export const deleteCurrentUser = async () => {
    return await axios.delete('/users/username/:username');
}