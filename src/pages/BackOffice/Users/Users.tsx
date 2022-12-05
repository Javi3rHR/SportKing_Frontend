import { deleteUser } from '@/services';
import { SharingInformationService } from '@/services/sharing-information.service';
import { Button, Modal } from '@mui/material';
import { lazy, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const UsersGrid = lazy(async () => await import('./components/UsersGrid'));
const CreateUserForm = lazy(async () => await import('./components/CreateUserForm'));

const Users = () => {
	const [open, setOpen] = useState(false);
	const [rowId, setRowId] = useState(0);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	// handle delete
	const handleDelete = () => {
		Swal.fire({
			title: '¿Estás seguro?',
			text: 'No podrás revertir esta acción',
			icon: 'warning',
			showDenyButton: true,
			confirmButtonText: 'Sí',
			denyButtonText: 'No',
			customClass: {
				actions: 'my-actions',
				confirmButton: 'order-2',
				denyButton: 'order-3',
			},
		})
			.then(async result => {
				if (result.isConfirmed) {
					deleteUser(rowId)
						.then(() => {
							location.reload();
						})
						.catch(error => {
							console.log(error);
						});
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const subscription$ = SharingInformationService.getSubject();

	useEffect(() => {
		subscription$.subscribe((data: any) => {
			// console.log(data);
			setRowId(data);
			// alert(`El id del usuario es: ${rowId}`);
		});
	}, [subscription$]);

	return (
		<>
			<div className='h-screen flex-1 gap-1 p-7 text-gray-100'>
				<h1 className='text-3xl font-semibold '>Usuarios</h1>
				<div className='w-full p-10'>
					<Button variant='outlined' onClick={handleOpen}>
						Añadir
					</Button>
					<Button variant='outlined' color='error' onClick={handleDelete}>
						Delete
					</Button>
					<UsersGrid />
				</div>
			</div>
			<div>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby='modal-modal-title'
					aria-describedby='modal-modal-description'
				>
					<CreateUserForm handleClose={handleClose} />
				</Modal>
			</div>
		</>
	);
};

export default Users;
