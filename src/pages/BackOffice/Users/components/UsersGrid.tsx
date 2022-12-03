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
];

const UsersGrid = (): JSX.Element => {
	const [tableData, setTableData] = useState([]);
	const rowId = (dataTable: any) => dataTable.user_id;

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

	return <DataTable tableData={tableData} columns={columns} rowId={rowId} />;
};

export default UsersGrid;
