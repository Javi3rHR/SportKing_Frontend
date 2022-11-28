// export interface BackOfficeInterface {}

import { PrivateRoutes } from '@/models';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Sidebar } from './components';

const Users = lazy(async () => await import('./Users/Users'));
const AdminHome = lazy(async () => await import('./AdminHome/AdminHome'));
const Reservations = lazy(async () => await import('./Reservations/Reservations'));

function BackOffice() {
	return (
		<>
			<div className='flex'>
				<Sidebar />
				<Routes>
					{/* <Route path='/' element={<Navigate replace to={PrivateRoutes.BACKOFFICE} />} /> */}
					<Route path={PrivateRoutes.ADMINHOME} element={<AdminHome />} />
					<Route path={PrivateRoutes.USERS} element={<Users />} />
					<Route path={PrivateRoutes.RESERVATIONS} element={<Reservations />} />
				</Routes>
			</div>
		</>
	);
}

export default BackOffice;
