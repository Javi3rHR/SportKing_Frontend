import { getReservations } from '@/services';
import { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
import DataTable from '../../components/DataGrid';

const columns = [
	{ field: 'acciones', headerName: 'Acciones', width: 140 },
	{ field: 'id', headerName: 'ID', width: 70 },
	{ field: 'date', headerName: 'Fecha', width: 150 },
	{ field: 'paid', headerName: 'Pagado', width: 150 },
	{ field: 'user', headerName: 'Usuario', width: 150 },
	{ field: 'time_interval', headerName: 'Intervalo de tiempo', width: 300 },
];

const ReservationsGrid = () => {
	const [tableData, setTableData] = useState([]);
	const rowId = (tableData: any) => tableData.id;

	useEffect(() => {
		getReservations()
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

	return <DataTable tableData={tableData} columns={columns} rowId={rowId} />;
};

export default ReservationsGrid;
