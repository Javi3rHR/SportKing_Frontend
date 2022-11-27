import { Sport } from "@/models";
import { axiosConfig as axios } from "@/utils";

/* GET */

export const getSports = async () => {
    return await axios.get('api/sports');
}

export const getSportById = async (id: number) => {
    return await axios.get(`api/sports/${id}`);
}


/* POST */

export const createSport = async (sport: Sport) => {
    return await axios.post('api/sports', sport);
}

/* PUT */

export const updateSport = async (sport: Sport) => {
    return await axios.put(`api/sports/${sport.sport_id}`, sport);
}

/* DELETE */

export const deleteSport = async (id: number) => {
    return await axios.delete(`api/sports/${id}`);
}