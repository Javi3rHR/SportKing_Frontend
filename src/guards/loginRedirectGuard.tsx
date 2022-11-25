import { PrivateRoutes } from '@/models';
import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

// Navega a la ruta privada si el usuario esta logueado
export const LoginRedirectGuard = () => {
	const userState = useSelector((store: AppStore) => store.user);
	return userState.username ? <Navigate replace to={PrivateRoutes.BACKOFFICE} /> : <Outlet />;
};

export default LoginRedirectGuard;
