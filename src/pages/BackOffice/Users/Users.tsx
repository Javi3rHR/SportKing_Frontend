import { Button, Modal } from '@mui/material';
import { lazy, useState } from 'react';

const UsersGrid = lazy(async () => await import('./components/UsersGrid'));
const CreateUserForm = lazy(async () => await import('./components/CreateUserForm'));

const Users = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<div className='h-screen flex-1 p-7 text-gray-100'>
				<h1 className='text-3xl font-semibold '>Usuarios</h1>
				<div className='w-full p-10'>
					<Button variant='outlined' onClick={handleOpen}>
						Añadir
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
