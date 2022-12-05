import axios from '../utils/config/axios.config';

/* GET */

export const getReservations = async (): Promise<any> => {
    return await axios.get('api/reservations');
}

export const getReservationsByUserId = async (id: number) => {
    return await axios.get(`api/users/${id}/reservations`);
}

export const getReservastionById = async (userId: number, reservationId: number) => {
    return await axios.get(`api/users/${userId}/reservations/${reservationId}`);
}

/* POST */

// eslint-disable-next-line @typescript-eslint/naming-convention
export const createReservation = async (userId: number, time_interval_id: string, date: String, paid: boolean) => {
    const body = {
        time_interval_id,
        date,
        paid
    }
    return await axios.post(`api/users/${userId}/reservations`, body);
}

/* DELETE */

export const deleteReservation = async (userId: number, reservationId: number) => {
    return await axios.delete(`api/users/${userId}/reservations/${reservationId}`);
}

export const deleteReservationWithAdmin = async (id: number) => {
    return await axios.delete(`api/reservations//${id}`);
}