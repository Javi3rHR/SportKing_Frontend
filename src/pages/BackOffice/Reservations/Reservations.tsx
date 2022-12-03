import { ReservationsGrid } from './components';

const Reservations = () => {
	return (
		<div className='h-screen flex-1 p-7 text-gray-100'>
			<h1 className='text-3xl font-semibold '>Reservas</h1>
			<div className='container p-10'>
				<ReservationsGrid />
			</div>
		</div>
	);
};

export default Reservations;
