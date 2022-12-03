import { lazy } from 'react';

const CourtsGrid = lazy(async () => await import('./components/CourtsGrid'));

const Courts = () => {
	return (
		<div className='h-screen flex-1 p-7 text-gray-100'>
			<h1 className='text-3xl font-semibold '>Pistas</h1>
			<div className='w-full p-10'>
				<CourtsGrid />
			</div>
		</div>
	);
};

export default Courts;
