import { getUsers } from '@/services';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import DataTable from '../../components/DataGrid';

const columns = [
	{ field: 'acciones', headerName: 'Acciones', width: 140 },
	{ field: 'user_id', headerName: 'ID', width: 70 },
	{ field: 'username', headerName: 'Username', width: 150 },
	{ field: 'name', headerName: 'Nombre', width: 250 },
	{ field: 'email', headerName: 'Email', width: 250 },
	{ field: 'phone', headerName: 'Teléfono', width: 200 },
	{ field: 'roles', headerName: 'Roles', width: 250 },
];

const UsersGrid = (): JSX.Element => {
	const [tableData, setTableData] = useState([]);
	const rowId = (dataTable: any) => dataTable.user_id;
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
