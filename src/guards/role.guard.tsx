import { PrivateRoutes, Role } from '@/models';
import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {
	roles: Role[];
}

function RoleGuard({ roles }: Props) {
	const userState = useSelector((store: AppStore) => store.user);
	return userState.roles === roles ? (
		<Outlet />
	) : (
		<Navigate replace to={PrivateRoutes.PRIVATE} />
	);
}
export default RoleGuard;
