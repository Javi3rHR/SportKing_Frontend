/* eslint-disable @typescript-eslint/no-floating-promises */
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getUsers } from '@/services';

const columns = [
	{ field: 'id', headerName: 'ID' },
	{ field: 'title', headerName: 'Title', width: 300 },
	{ field: 'body', headerName: 'Body', width: 600 },
];

const DataTable = () => {
	const [tableData, setTableData] = useState([]);

	useEffect(() => {
		getUsers().then(res => {
			setTableData(res.data);
		});
	}, []);

	return (
		<div style={{ height: 500, width: '100%' }}>
			<DataGrid rows={tableData} columns={columns} pageSize={12} />
		</div>
	);
};

export default DataTable;
