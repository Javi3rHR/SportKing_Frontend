import { TimeInterval } from "@/models";
import { axiosConfig as axios } from "@/utils";

/* GET */

export const getTimeIntervals = async () => {
    return await axios.get(`api/time_intervals`);
}

export const getTimeIntervalsByCourtIdAndDate = async (courtId: number, date: Date) => {
    return await axios.get(`api/courts/${courtId}/time_intervals?reservationDate=${date.toLocaleDateString('en-GB')}`);
}

/* POST */

export const createTimeInterval = async (courtId: number, timeInterval: TimeInterval) => {
    return await axios.post(`api/courts/${courtId}/time_intervals`, timeInterval);
}

/* DELETE */

export const deleteTimeInterval = async (courtId: number, timeIntervalId: number) => {
    return await axios.delete(`api/courts/${courtId}/time_intervals/${timeIntervalId}`);
}