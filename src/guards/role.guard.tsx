import { PrivateRoutes, Role } from '@/models';
import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {
	roles: Role[];
}

// Comprueba si dos objeto Role son iguales
function containsSameRole(object1: Role, object2: Role[]): boolean {
	return object2.find(role => role.name === object1.name) !== undefined;
}

// Comprobamos si el usuario contiene el rol requerido en el array de roles
const userHasRequiredRole = (userRoles: Role[], requiredRoles: Role[]) => {
	return userRoles.some(role => containsSameRole(role, requiredRoles));
};

function RoleGuard({ roles }: Props): JSX.Element {
	const userState = useSelector((store: AppStore) => store.user);
	return userHasRequiredRole(userState.roles, roles) ? (
		<Outlet />
	) : (
		<Navigate replace to={PrivateRoutes.PRIVATE} />
	);
}
export default RoleGuard;
