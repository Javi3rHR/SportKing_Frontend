import { lazy } from 'react';

const TimeIntervalsGrid = lazy(async () => await import('./components/TimeIntervalsGrid'));

const TimeIntervals = () => {
	return (
		<div className='h-screen flex-1 p-7 text-gray-100'>
			<h1 className='text-3xl font-semibold '>Horarios Disponibles</h1>
			<div className='w-full p-10'>
				<TimeIntervalsGrid />
			</div>
		</div>
	);
};

export default TimeIntervals;
