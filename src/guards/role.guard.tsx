import { PrivateRoutes, Role } from '@/models';
import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {
	role: Role;
}

function RoleGuard({ role }: Props): JSX.Element {
	const userState = useSelector((store: AppStore) => store.user);
	return userState.roles.includes(role) ? (
		<Outlet />
	) : (
		<Navigate replace to={PrivateRoutes.PRIVATE} />
	);
}
export default RoleGuard;
