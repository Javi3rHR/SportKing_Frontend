import { getUsers } from '@/services';
import { useEffect, useState } from 'react';
import { HomeCard } from './components';

const AdminHome = () => {
	const [users, setUsers] = useState(0);

	useEffect(() => {
		getUsers()
			.then(response => {
				setUsers(response.data.length);
			})
			.catch(error => {
				console.error(error);
			});
	}, []);
	return (
		<div className='h-screen flex-1 p-7 text-gray-100'>
			<h1 className='text-3xl font-semibold '>Datos Generales</h1>
			<div className='container mx-auto mt-12'>
				<div className='mb-6 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3'>
					<HomeCard title='Usuarios' value={String(users)} />
					<HomeCard title='Pistas disponibles' value={'7'} />
					<HomeCard title='Reservas totales' value={'400'} />
					<HomeCard title='Reservas de hoy' value={'13'} />
				</div>
			</div>
		</div>
	);
};

export default AdminHome;
