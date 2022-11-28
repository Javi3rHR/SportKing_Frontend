// export interface BackOfficeInterface {}

import { Logout } from '@/components';
import { PrivateRoutes } from '@/models';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Users = lazy(async () => await import('./Users/Users'));

function BackOffice() {
	return (
		<>
			<Routes>
				{/* <Route path='/' element={<Navigate replace to={PrivateRoutes.PRIVATE} />} /> */}
				<Route path={PrivateRoutes.USERS} element={<Users />} />
			</Routes>
			<div>BackOffice HOME</div>;
			<Logout />
		</>
	);
}

export default BackOffice;
