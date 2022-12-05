import { Button, Modal } from '@mui/material';
import { useState } from 'react';
import { CreateReservationForm, UserReservationsGrid } from '../components';

const UserReservations = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<>
			<div className='h-screen flex-1 p-7 text-gray-100'>
				<h1 className='text-3xl font-semibold '>Mis Reservas</h1>
				<div className='w-full p-10'>
					<div className='flex gap-2'>
						<Button variant='outlined' onClick={handleOpen}>
							Añadir
						</Button>
					</div>
					<UserReservationsGrid />
				</div>
			</div>
			<div>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby='modal-modal-title'
					aria-describedby='modal-modal-description'
				>
					<CreateReservationForm handleClose={handleClose} />
				</Modal>
			</div>
		</>
	);
};

export default UserReservations;
