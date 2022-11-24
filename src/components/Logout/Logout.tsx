import { clearLocalStorage } from '@/utils';
import { useDispatch } from 'react-redux';
import { PublicRoutes } from '../../models';
import { resetUser, UserKey } from '../../redux/states/user';

function Logout() {
	// const navigate = useNavigate();
	const dispatch = useDispatch();
	const logOut = () => {
		clearLocalStorage(UserKey);
		dispatch(resetUser());
		// navigate(PublicRoutes.LOGIN);
		window.location.href = PublicRoutes.LOGIN;
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
