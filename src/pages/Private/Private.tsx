import { Logout } from '@/components';
import { PrivateRoutes } from '@/models';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const UserProfile = lazy(async () => await import('./UserProfile/UserProfile'));

function Private() {
	return (
		<>
			<Routes>
				{/* <Route path='/' element={<Navigate replace to={PrivateRoutes.PRIVATE} />} /> */}
				<Route path={PrivateRoutes.USER_PROFILE} element={<UserProfile />} />
			</Routes>
			<Logout />
		</>
	);
}

export default Private;
