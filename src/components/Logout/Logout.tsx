/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { clearLocalStorage } from '@/utils';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { PublicRoutes } from '../../models';
import { resetUser, UserKey } from '../../redux/states/user';

function Logout({ open }: { open: boolean }) {
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

	return (
		<li
			onClick={logOut}
			className={`cursor-pointer items-center gap-x-4 rounded-md p-2 text-sm text-gray-300 hover:bg-slate-600`}
		>
			<div className='flex items-center space-x-3 rounded-md'>
				<img src={`/src/pages/BackOffice/components/assets/Logout.png`} className='fill-' />
				<span className={`${!open && 'hidden'} origin-left duration-200 `}>Logout</span>
			</div>
		</li>
	);
}
export default Logout;
