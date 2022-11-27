import axios from '../utils/config/axios.config';

/* GET */

export const getReservations = async () => {
    return await axios.get('api/reservations');
}

export const getReservatiosnByUserId = async (id: number) => {
    return await axios.get(`api/user/${id}/reservations`);
}

export const getReservastionById = async (userId: number, reservationId: number) => {
    return await axios.get(`api/user/${userId}/reservations/${reservationId}`);
}

/* POST */

export const createReservation = async () => {
    return await axios.post('api/reservations');
}

/* DELETE */

export const deleteReservation = async (userId: number, reservationId: number) => {
    return await axios.delete(`api/user/${userId}/reservations/${reservationId}`);
}

export const deleteReservationWithAdmin = async (id: number) => {
    return await axios.delete(`api/reservations//${id}`);
}