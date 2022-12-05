import { PrivateRoutes } from '@/models';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SidebarUser } from './components';

const UserProfile = lazy(async () => await import('./UserProfile/UserProfile'));
const UserReservations = lazy(async () => await import('./UserReservations/UserReservations'));

function Private() {
	return (
		<div className='flex'>
			<SidebarUser />
			<Routes>
				{/* <Route path='/' element={<Navigate replace to={PrivateRoutes.PRIVATE} />} /> */}
				<Route path={PrivateRoutes.USER_PROFILE} element={<UserProfile />} />
				<Route path={PrivateRoutes.USER_RESERVATIONS} element={<UserReservations />} />
			</Routes>
			{/* AREA PRIVADA EN DESARROLLO */}
		</div>
	);
}

export default Private;
