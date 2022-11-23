import { PrivateRoutes, PublicRoutes } from '@/models';
import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {
	privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />;

// Remplaza la url para navegar a la ruta privada
const PublicValidationFragment = (
	<Navigate replace to={PrivateRoutes.BACKOFFICE} />
);

/**
 * El Guard se ejecuta cada vez que se navega a una ruta privada.
 * Comprueba si existe un usuario en el store de redux.
 * Si existe, se navega a la ruta privada.
 * Si no existe, se navega a la ruta pública.
 */
export const AuthGuard = ({ privateValidation }: Props) => {
	const userState = useSelector((store: AppStore) => store.user);
	return userState.username ? (
		privateValidation ? (
			PrivateValidationFragment
		) : (
			PublicValidationFragment
		)
	) : (
		// Navega a login si no esta logueado
		<Navigate replace to={PublicRoutes.LOGIN} />
	);
};

export default AuthGuard;
