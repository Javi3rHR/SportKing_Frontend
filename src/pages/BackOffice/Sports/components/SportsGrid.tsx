import { getSports } from '@/services';
import { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
import DataTable from '../../components/DataGrid';

const columns = [
	{ field: 'acciones', headerName: 'Acciones', width: 140 },
	{ field: 'id', headerName: 'ID', width: 70 },
	{ field: 'sport_name', headerName: 'Nombre', width: 150 },
];

const SportsGrid = () => {
	const [tableData, setTableData] = useState([]);
	const rowId = (tableData: any) => tableData.id;
	const rows = tableData.map((row: any) => {
		return {
			...row,
		};
	});

	useEffect(() => {
		getSports()
			.then((response: AxiosResponse) => {
				if (response.status === 200) {
					// console.log(response.data);
					setTableData(response.data);
				}
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return <DataTable columns={columns} rowId={rowId} rows={rows} />;
};

export default SportsGrid;
