import { PrivateRoutes, PublicRoutes } from '@/models';
import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {
	privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = (
	<Navigate replace to={PrivateRoutes.PRIVATE} />
);

// This is a guard that will redirect to the private route if the user is not logged in.
export const AuthGuard = ({ privateValidation }: Props) => {
	const userState = useSelector((store: AppStore) => store.user);
	return userState.name ? (
		privateValidation ? (
			PrivateValidationFragment
		) : (
			PublicValidationFragment
		)
	) : (
		<Navigate replace to={PublicRoutes.LOGIN} />
	);
};

export default AuthGuard;
