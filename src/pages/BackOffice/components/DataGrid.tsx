/* eslint-disable @typescript-eslint/no-floating-promises */
import { getUsers } from '@/services';
import { DataGrid } from '@mui/x-data-grid';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

const columns = [
	{ field: 'user_id', headerName: 'ID' },
	{ field: 'username', headerName: 'Username', width: 200 },
	{ field: 'email', headerName: 'Email', width: 400 },
	{ field: 'phone', headerName: 'Teléfono', width: 300 },
];

const DataTable = () => {
	const [tableData, setTableData] = useState([]);

	useEffect(() => {
		getUsers()
			.then((response: AxiosResponse) => {
				if (response.status === 200) {
					setTableData(response.data);
					// console.log(response.data);
				}
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return (
		<div className='h-96 w-full'>
			<DataGrid
				rows={tableData}
				columns={columns}
				pageSize={15}
				getRowId={(tableData: any) => tableData.user_id}
				sx={{
					boxShadow: 2,
					border: 2,
					color: 'white',
					borderColor: 'primary.light',
					'& .MuiDataGrid-cell:hover': {
						color: 'primary.main',
					},
				}}
			/>
		</div>
	);
};

export default DataTable;
