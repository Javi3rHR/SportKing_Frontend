/* eslint-disable @typescript-eslint/no-floating-promises */
import { getUsers } from '@/services';
import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

const columns = [
	{ field: 'acciones', headerName: 'Acciones', width: 140 },
	{ field: 'user_id', headerName: 'ID', width: 70 },
	{ field: 'username', headerName: 'Username', width: 150 },
	{ field: 'name', headerName: 'Nombre', width: 250 },
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
		<Box sx={{ height: 500, width: '100%' }} className='mt-3'>
			<DataGrid
				rows={tableData}
				columns={columns}
				getRowId={(tableData: any) => tableData.user_id}
				disableSelectionOnClick
				components={{ Toolbar: GridToolbar }}
				className='bg-slate-700 pt-1'
				sx={{
					color: 'white',
					border: '1px solid #1F2937',
					'& .MuiToolbar-root': {
						color: '#D1D5DB',
					},
					'& .MuiDataGrid-cell': {
						fontWeight: 'normal',
						// backgroundColor: '#1F2937',
						fontSize: '1rem',
					},
					'& .MuiDataGrid-columnHeaders': {
						fontWeight: 'bold',
						fontSize: '1.2rem',
						// backgroundColor: '#1F2937',
					},
					'& .css-1knaqv7-MuiButtonBase-root-MuiButton-root ': {
						color: '#D1D5DB',
					},
				}}
			/>
		</Box>
	);
};

export default DataTable;
