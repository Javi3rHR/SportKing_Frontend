import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from '../components/forms/LoginForm';
import RegisterForm from '../components/forms/RegisterForm';
import Sidebar from '../components/pure/Sidebar';
import Home from '../pages/home';

export const AppRoutes = (): JSX.Element => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<LoginForm />} />
			<Route path='/register' element={<RegisterForm />} />
			<Route path='/Dashboard' element={<Sidebar></Sidebar>} />
			<Route path='*' element={<Navigate to='/' replace />}></Route>
		</Routes>
	);
};
