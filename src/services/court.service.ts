import { Court } from "@/models";
import { axiosConfig as axios } from "@/utils";

/* GET */

export const getCourts = async () => {
    return await axios.get(`api/courts`);
}

export const getCourtById = async (sportId: number, courtId: number) => {
    return await axios.get(`api/sport/${sportId}courts/${courtId}`);
}

/* POST */

export const createCourt = async (sportId: number, court: Court) => {
    return await axios.post(`api/sport/${sportId}/courts`, court);
}

/* PUT */

export const updateCourt = async (sportId: number, court: Court) => {
    return await axios.put(`api/sport/${sportId}/courts`, court);
}

/* DELETE */

export const deleteCourt = async (courtId: number) => {
    return await axios.delete(`api/courts/${courtId}`);
}