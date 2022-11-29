import { clearLocalStorage } from '@/utils';
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
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	return <button onClick={logOut}>Cerrar Sesión</button>;
}
export default Logout;
