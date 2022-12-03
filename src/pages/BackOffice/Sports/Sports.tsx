import { lazy } from 'react';

const SportsGrid = lazy(async () => await import('./components/SportsGrid'));

const Sports = () => {
	return (
		<div className='h-screen flex-1 p-7 text-gray-100'>
			<h1 className='text-3xl font-semibold '>Deportes</h1>
			<div className='w-full p-10'>
				<SportsGrid />
			</div>
		</div>
	);
};

export default Sports;
