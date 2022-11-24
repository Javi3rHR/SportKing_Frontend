import { Role } from './user.model';

const adminRole: Role = {
	role_id: 1,
	name: 'ADMIN',
	description: 'Admin role',
};

const userRole: Role = {
	role_id: 2,
	name: 'USER',
	description: 'User role',
};

export const Roles = {
	ADMIN: adminRole,
	USER: userRole,
};
