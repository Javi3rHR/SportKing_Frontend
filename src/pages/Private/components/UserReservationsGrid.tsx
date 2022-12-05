import DataTable from '@/pages/BackOffice/components/DataGrid';
import { getReservationsByUserId } from '@/services';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

const columns = [
	{ field: 'paid', headerName: 'Pagado', width: 150 },
	{ field: 'date', headerName: 'Fecha', width: 150 },
	{ field: 'time_interval', headerName: 'Hora', width: 150 },
	{ field: 'user', headerName: 'Usuario', width: 200 },
	{ field: 'sport', headerName: 'Deporte', width: 150 },
	{ field: 'court', headerName: 'Pista', width: 150 },
];

const UserReservationsGrid = () => {
	const [tableData, setTableData] = useState([]);
	const rowId = (tableData: any) => `${tableData.date}+${tableData.time_interval}`;
	const rows = tableData.map((row: any) => {
		return {
			...row,
			user: row.user.username,
			time_interval: `${row.time_interval.start_time} - ${row.time_interval.end_time}`,
			paid: row.paid ? 'Si' : 'No',
			court: row.time_interval.court.name,
			sport: row.time_interval.court.sport.sport_name,
		};
	});
	const userid = JSON.parse(localStorage.getItem('user') ?? '').user_id;

	useEffect(() => {
		getReservationsByUserId(userid)
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

export default UserReservationsGrid;
