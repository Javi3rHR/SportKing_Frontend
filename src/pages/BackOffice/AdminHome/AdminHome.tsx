import { getCourts, getReservations, getSports, getUsers } from '@/services';
import { useEffect, useState } from 'react';
import { HomeCard } from './components';

const AdminHome = () => {
	const [users, setUsers] = useState(0);
	const [courts, setCourts] = useState(0);
	const [sports, setSports] = useState(0);
	const [reservations, setReservations] = useState(0);

	useEffect(() => {
		try {
			getUsers()
				.then(response => {
					setUsers(response.data.length);
				})
				.catch(error => {
					throw error;
				});
			getCourts()
				.then(response => {
					setCourts(response.data.length);
				})
				.catch(error => {
					throw error;
				});
			getSports()
				.then(response => {
					setSports(response.data.length);
				})
				.catch(error => {
					throw error;
				});
			getReservations()
				.then(response => {
					setReservations(response.data.length);
				})
				.catch(error => {
					throw error;
				});
		} catch (error) {
			console.log(error);
		}
	}, []);
	return (
		<div className='h-screen flex-1 p-7 text-gray-100'>
			<h1 className='text-3xl font-semibold '>Datos Generales</h1>
			<div className='container mx-auto mt-12'>
				<div className='mb-6 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3'>
					<HomeCard title='Usuarios' value={String(users)} />
					<HomeCard title='Deportes operativos' value={String(sports)} />
					<HomeCard title='Pistas disponibles' value={String(courts)} />
					<HomeCard title='Reservas totales' value={String(reservations)} />
				</div>
			</div>
		</div>
	);
};

export default AdminHome;
