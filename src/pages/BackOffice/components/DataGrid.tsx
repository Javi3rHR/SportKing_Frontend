/* eslint-disable @typescript-eslint/no-floating-promises */
import { getUsers } from '@/services';
import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

const columns = [
	{ field: 'user_id', headerName: 'ID' },
	{ field: 'username', headerName: 'Username', width: 200 },
	{ field: 'email', headerName: 'Email', width: 250 },
	{ field: 'phone', headerName: 'Teléfono', width: 200 },
];

const DataTable = () => {
	const [tableData, setTableData] = useState([]);

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

	return (
		<Box sx={{ height: 500, width: '100%' }}>
			<DataGrid
				rows={tableData}
				columns={columns}
				getRowId={(tableData: any) => tableData.user_id}
				disableSelectionOnClick
				components={{ Toolbar: GridToolbar }}
				className='bg-slate-700'
				sx={{
					color: 'white',
					border: '1px solid #1F2937',
					fontSize: '1rem',
				}}
			/>
		</Box>
	);
};

export default DataTable;
