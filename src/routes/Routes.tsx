import { Sidebar } from '@/components';
import { Home, Login, Register } from '@/pages';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRoutes = (): JSX.Element => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/Dashboard' element={<Sidebar></Sidebar>} />
			<Route path='*' element={<Navigate to='/' replace />}></Route>
		</Routes>
	);
};
