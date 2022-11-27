import { clearLocalStorage, SnackbarUtilitiesConfigurator } from '@/utils';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { PublicRoutes } from '../../models';
import { resetUser, UserKey } from '../../redux/states/user';

function Logout() {
	// const navigate = useNavigate();
	const dispatch = useDispatch();
	const MySwal = withReactContent(Swal);

	const logOut = () => {
		MySwal.fire({
			title: '¿Estás seguro de cerrar sesión?',
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
					clearLocalStorage(UserKey);
					clearLocalStorage('token');
					dispatch(resetUser());
					window.location.href = PublicRoutes.LOGIN;
					// <Navigate replace to={PublicRoutes.LOGIN} />;
					<SnackbarUtilitiesConfigurator />;
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<button
			onClick={logOut}
			className='transform rounded-md bg-blue-600 px-4 py-2 tracking-wide text-white shadow-md transition-colors duration-200 hover:bg-blue-700 focus:bg-purple-700
	focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
		>
			Log Out
		</button>
	);
}
export default Logout;
