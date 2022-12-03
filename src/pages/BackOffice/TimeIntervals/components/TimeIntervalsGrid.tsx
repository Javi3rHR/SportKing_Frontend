import { getTimeIntervals } from '@/services';
import { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
import DataTable from '../../components/DataGrid';

const columns = [
	{ field: 'acciones', headerName: 'Acciones', width: 140 },
	{ field: 'id', headerName: 'ID', width: 70 },
	{ field: 'start_time', headerName: 'Hora de entrada', width: 200 },
	{ field: 'end_time', headerName: 'Hora de salida', width: 200 },
	{ field: 'court', headerName: 'Pista', width: 200 },
	{ field: 'sport', headerName: 'Deporte', width: 200 },
];

const TimeIntervalsGrid = () => {
	const [tableData, setTableData] = useState([]);
	const rowId = (tableData: any) => tableData.id;
	const rows = tableData.map((row: any) => {
		return {
			...row,
			court: row.court.name,
			sport: row.court.sport.sport_name,
		};
	});

	useEffect(() => {
		getTimeIntervals()
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

export default TimeIntervalsGrid;
