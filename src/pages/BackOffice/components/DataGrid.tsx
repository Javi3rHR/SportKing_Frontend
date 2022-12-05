/* eslint-disable @typescript-eslint/no-floating-promises */
import { Box } from '@mui/material';
import { DataGrid, GridSelectionModel, GridToolbar } from '@mui/x-data-grid';
import { useState } from 'react';

const DataTable = ({ rows, columns, rowId }: any) => {
	const [pageSize, setPageSize] = useState(10);
	const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);

	return (
		<Box sx={{ height: 671, width: '100%' }} className='mt-3'>
			<DataGrid
				// Mapea los datos de la tabla
				rows={rows}
				columns={columns}
				getRowId={rowId}
				pagination
				pageSize={pageSize}
				onPageSizeChange={newPageSize => setPageSize(newPageSize)}
				rowsPerPageOptions={[10, 50, 100]}
				components={{ Toolbar: GridToolbar }}
				className='bg-slate-700 pt-1'
				onSelectionModelChange={newSelectionModel => {
					setSelectionModel(newSelectionModel);
					console.log(newSelectionModel);
				}}
				selectionModel={selectionModel}
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
