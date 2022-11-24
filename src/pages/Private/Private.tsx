import { PrivateRoutes } from '@/models';
import { RoutesWithNotFound } from '@/utils';
import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';

const UserProfile = lazy(async () => await import('./UserProfile/UserProfile'));

function Private() {
	return (
		<RoutesWithNotFound>
			<Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />} />
			<Route path={PrivateRoutes.USER_PROFILE} element={<UserProfile />} />
		</RoutesWithNotFound>
	);
}

export default Private;
