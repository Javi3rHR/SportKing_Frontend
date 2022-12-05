import { getUsers } from '@/services';
import { AxiosResponse } from 'axios';
import { useEffect, useRef, useState } from 'react';
import DataTable from '../../components/DataGrid';

const UsersGrid = (): JSX.Element => {
	const [tableData, setTableData] = useState([]);
	const rowId = (dataTable: any) => dataTable.user_id;
	const rowsRef: any = useRef();

	rowsRef.current = tableData;

	const columns = [
		// {
		// 	field: 'editar',
		// 	headerName: '',
		// 	width: 100,
		// 	renderCell: (params: any) => (
		// 		<button
		// 			className='rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
		// 			// onClick={}
		// 		>
		// 			Editar
		// 		</button>
		// 	),
		// },
		// // utton to delete user
		// {
		// 	field: 'eliminar',
		// 	headerName: '',
		// 	width: 100,
		// 	renderCell: () => (
		// 		<button
		// 			className='rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-700'
		// 			// onClick={handleDelete(1)}
		// 		>
		// 			X
		// 		</button>
		// 	),
		// },
		{ field: 'user_id', headerName: 'ID', width: 70 },
		{ field: 'username', headerName: 'Username', width: 150 },
		{ field: 'name', headerName: 'Nombre', width: 250 },
		{ field: 'email', headerName: 'Email', width: 250 },
		{ field: 'phone', headerName: 'Teléfono', width: 200 },
		{ field: 'roles', headerName: 'Roles', width: 250 },
	];

	const rows = tableData.map((row: any) => {
		return {
			...row,
			roles: row.roles.map((role: any) => role.name).join(', '),
		};
	});

	useEffect(() => {
		getUsers()
			.then((response: AxiosResponse) => {
				if (response.status === 200) {
					setTableData(response.data);
				}
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return <DataTable rows={rows} columns={columns} rowId={rowId} />;
};

export default UsersGrid;
