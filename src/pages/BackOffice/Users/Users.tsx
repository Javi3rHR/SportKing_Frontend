import { Button } from '@mui/material';
import { lazy } from 'react';

const DataTable = lazy(async () => await import('../components/DataGrid'));

const Users = () => {
	return (
		<div className='h-screen flex-1 p-7 text-gray-100'>
			<h1 className='text-3xl font-semibold '>Usuarios</h1>
			<div className='container p-10'>
				<Button variant='outlined'>Añadir</Button>
				<DataTable />
			</div>
		</div>
	);
};

export default Users;
