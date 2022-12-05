import { PrivateRoutes } from '@/models';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SidebarUser } from './components';

const UserProfile = lazy(async () => await import('./UserProfile/UserProfile'));

function Private() {
	return (
		<div className='flex'>
			<SidebarUser />
			<Routes>
				{/* <Route path='/' element={<Navigate replace to={PrivateRoutes.PRIVATE} />} /> */}
				<Route path={PrivateRoutes.USER_PROFILE} element={<UserProfile />} />
			</Routes>
		</div>
	);
}

export default Private;
