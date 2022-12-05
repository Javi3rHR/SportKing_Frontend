import { SharingInformationService } from '@/services/sharing-information.service';
import { Button, Modal } from '@mui/material';
import { lazy, useEffect, useState } from 'react';
import DeleteUserButton from './components/DeleteUserButton';

const UsersGrid = lazy(async () => await import('./components/UsersGrid'));
const CreateUserForm = lazy(async () => await import('./components/CreateUserForm'));

const Users = () => {
	const [open, setOpen] = useState(false);
	const [rowId, setRowId] = useState(0);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const subscription$ = SharingInformationService.getSubject();

	useEffect(() => {
		subscription$.subscribe((data: any) => {
			setRowId(data);
		});
	}, [subscription$]);

	return (
		<>
			<div className='h-screen flex-1 gap-1 p-7 text-gray-100'>
				<h1 className='text-3xl font-semibold '>Usuarios</h1>
				<div className='w-full p-10'>
					<div>
						<div className='flex gap-2'>
							<Button variant='outlined' onClick={handleOpen}>
								Añadir
							</Button>
							<DeleteUserButton rowId={rowId} />
						</div>
					</div>
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
