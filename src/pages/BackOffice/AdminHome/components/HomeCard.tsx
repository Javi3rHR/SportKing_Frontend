interface HomeCardProps {
	title: string;
	value: string;
}

export const HomeCard = ({ title, value }: HomeCardProps) => {
	return (
		<div className='w-full rounded-lg bg-slate-100 px-4 py-5 shadow'>
			<div className='truncate text-sm font-medium text-gray-500'>{title}</div>
			<div className='mt-1 text-3xl font-semibold text-gray-900'>{value}</div>
		</div>
	);
};
