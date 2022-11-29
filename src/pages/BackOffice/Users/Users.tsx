import DataTable from '../components/DataGrid';

const Users = () => {
	return (
		<div className='h-screen flex-1 p-7 text-gray-100'>
			<h1 className='text-3xl font-semibold '>Usuarios</h1>
			<div className='container p-10'>
				<DataTable />
			</div>
		</div>
	);
};

export default Users;
