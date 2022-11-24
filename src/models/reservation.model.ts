export interface Reservation {
	reservation_id: number;
	time_interval: TimeInterval;
	userResponse: UserResponse;
	reservation_date: Date;
	paid: boolean;
}

export interface TimeInterval {
	time_interval_id: number;
	start_time: string;
	end_time: string;
	court: Court;
}

export interface UserResponse {
	user_id: number;
	username: string;
	name?: any;
	email: string;
	phone?: any;
	image?: any;
}

export interface Court {
	court_id: number;
	sport: Sport;
	name: string;
	price: number;
}

export interface Sport {
	sport_id: number;
	name: string;
	description: string;
	photo: string;
}

export enum PlayerLevel {
	Beginner,
	Intermediate,
	Advanced,
}
