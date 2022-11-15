import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from '../components/pure/forms/LoginForm';
import RegisterForm from '../components/pure/forms/RegisterForm';
import Home from '../pages/home';

export const AppRoutes = (): JSX.Element => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<LoginForm />} />
			<Route path='/register' element={<RegisterForm />} />
			<Route path='*' element={<Navigate to='/' replace />}></Route>
		</Routes>
	);
};
