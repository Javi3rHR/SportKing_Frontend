import { getUsers } from '@/services';
import { useEffect, useState } from 'react';

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
					<div className='w-full rounded-lg bg-white px-4 py-5 shadow'>
						<div className='truncate text-sm font-medium text-gray-500'>
							Total users
						</div>
						<div className='mt-1 text-3xl font-semibold text-gray-900'>{users}</div>
					</div>
					<div className='w-full rounded-lg bg-white px-4 py-5 shadow'>
						<div className='truncate text-sm font-medium text-gray-500'>
							Beneficios totales
						</div>
						<div className='mt-1 text-3xl font-semibold text-gray-900'>400€</div>
					</div>
					<div className='w-full rounded-lg bg-white px-4 py-5 shadow'>
						<div className='truncate text-sm font-medium text-gray-500'>
							Pistas disponibles
						</div>
						<div className='mt-1 text-3xl font-semibold text-gray-900'>10</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminHome;
