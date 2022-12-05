import { deleteUser } from '@/services';
import { Button } from '@mui/material';
import Swal from 'sweetalert2';

interface DeleteUserProps {
	rowId: number;
}

const DeleteUserButton = ({ rowId }: DeleteUserProps) => {
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
	return (
		<Button variant='outlined' color='error' onClick={handleDelete}>
			Eliminar
		</Button>
	);
};

export default DeleteUserButton;
