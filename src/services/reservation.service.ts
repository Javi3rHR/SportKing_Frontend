import axios from '../utils/config/axios.config';


/* GETTERS */

export const getReservations = async () => {
    return await axios.get('api/reservations');
}

export const getReservatiosnByUserId = async () => {
    return await axios.get('api/user/:id/reservations');
}

export const getReservastionById = async () => {
    return await axios.get('api/user/:id/reservations/:id');
}

/* POST */

export const createReservation = async () => {
    return await axios.post('api/reservations');
}

/* DELETE */

export const deleteReservation = async () => {
    return await axios.delete('api/user/:id/reservations/:id');
}

export const deleteReservationWithAdmin = async () => {
    return await axios.delete('api/reservations/:id');
}