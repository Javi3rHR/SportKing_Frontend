import { RegisterForm } from '@/components';
import { Box, Button, Modal } from '@mui/material';
import { lazy, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const DataTable = lazy(async () => await import('../components/DataGrid'));
// Sweetalert with Register User Form
// const FormSwal = withReactContent(Swal);
// const addUser = () => {
// 	FormSwal.fire({
// 		title: 'Nuevo Usuario',
// 		showCancelButton: true,
// 		confirmButtonText: 'Añadir',
// 		cancelButtonText: 'Cancelar',
// 		customClass: {
// 			actions: 'my-actions',
// 			confirmButton: 'order-2',
// 			cancelButton: 'order-3',
// 		},
// 	})
// 		.then(async result => {
// 			if (result.isConfirmed) {
// 				console.log('Añadir usuario');
// 			}
// 			if (result.isDenied) {
// 				console.log('Cancelar');
// 			}
// 		})
// 		.catch(err => {
// 			console.log(err);
// 		});
// };

// Modal with form to add new user

const Users = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<div className='h-screen flex-1 p-7 text-gray-100'>
				<h1 className='text-3xl font-semibold '>Usuarios</h1>
				<div className='container p-10'>
					<Button variant='outlined' onClick={handleOpen}>
						Añadir
					</Button>
					<DataTable />
				</div>
			</div>
			<div>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby='modal-modal-title'
					aria-describedby='modal-modal-description'
				>
					<RegisterForm />
				</Modal>
			</div>
		</>
	);
};

export default Users;
