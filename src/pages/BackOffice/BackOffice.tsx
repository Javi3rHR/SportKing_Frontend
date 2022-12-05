// export interface BackOfficeInterface {}

import { PrivateRoutes } from '@/models';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const SidebarAdmin = lazy(async () => await import('./components/SidebarAdmin'));
const Users = lazy(async () => await import('./Users/Users'));
const AdminHome = lazy(async () => await import('./AdminHome/AdminHome'));
const Reservations = lazy(async () => await import('./Reservations/Reservations'));
const Sports = lazy(async () => await import('./Sports/Sports'));
const Courts = lazy(async () => await import('./Courts/Courts'));
const TimeIntervals = lazy(async () => await import('./TimeIntervals/TimeIntervals'));

function BackOffice() {
	return (
		<div className='flex'>
			<SidebarAdmin />
			<Routes>
				<Route path={PrivateRoutes.ADMINHOME} element={<AdminHome />} />
				<Route path={PrivateRoutes.USERS} element={<Users />} />
				<Route path={PrivateRoutes.RESERVATIONS} element={<Reservations />} />
				<Route path={PrivateRoutes.SPORTS} element={<Sports />} />
				<Route path={PrivateRoutes.COURTS} element={<Courts />} />
				<Route path={PrivateRoutes.TIME_INTERVALS} element={<TimeIntervals />} />
			</Routes>
		</div>
	);
}

export default BackOffice;
