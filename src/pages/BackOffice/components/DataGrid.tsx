/* eslint-disable @typescript-eslint/no-floating-promises */
import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const DataTable = ({ tableData, columns, rowId }: any) => {
	return (
		<Box sx={{ height: 600, width: '100%' }} className='mt-3'>
			<DataGrid
				// Mapea los datos de la tabla
				rows={tableData.map((row: any) => {
					return {
						...row,
						user: row.user.username,
						time_interval: `${row.time_interval.start_time} - ${row.time_interval.end_time}`,
						paid: row.paid ? 'Si' : 'No',
					};
				})}
				columns={columns}
				getRowId={rowId}
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
