/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Logout } from '@/components';
import HomeIcon from '@mui/icons-material/Home';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { PrivateRoutes } from '@/models';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const SidebarAdmin = () => {
	const [open, setOpen] = useState(true);
	const user = JSON.parse(localStorage.getItem('user') ?? '{}');
	const Menus = [
		{ title: 'Home', icon: <HomeIcon />, path: PrivateRoutes.ADMINHOME },
		{
			title: 'Usuarios',
			gap: true,
			path: PrivateRoutes.USERS,
			icon: <PeopleAltIcon />,
		},
		{ title: 'Reservas ', icon: <EventNoteIcon />, path: PrivateRoutes.RESERVATIONS },
		{ title: 'Deportes', icon: <SportsBaseballIcon />, path: PrivateRoutes.SPORTS },
		{ title: 'Pistas', icon: <ConfirmationNumberIcon />, path: PrivateRoutes.COURTS },
		{ title: 'Horarios', icon: <WatchLaterIcon />, path: PrivateRoutes.TIME_INTERVALS },
	];

	return (
		<>
			<div
				className={` ${
					open ? 'w-72' : 'w-20 '
				} relative h-screen bg-slate-700  p-5 pt-8 duration-300`}
			>
				<img
					src='/src/assets/control.png'
					className={`border-dark-purple absolute -right-3 top-9 w-7 cursor-pointer
           rounded-full border-2  ${!open && 'rotate-180'}`}
					onClick={() => setOpen(!open)}
				/>
				<div className='flex items-center gap-x-4'>
					<img
						src='/src/assets/logo.png'
						className={`cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`}
					/>
					<h1
						className={`origin-left text-xl font-medium text-white duration-200 ${
							!open && 'scale-0'
						}`}
					>
						{user.username}
					</h1>
				</div>
				<ul className='pt-6'>
					{Menus.map((Menu, index) => (
						<li
							key={index}
							className={`cursor-pointer items-center gap-x-4 rounded-md text-sm text-gray-300 hover:bg-slate-600
              ${Menu.gap ? 'mt-7' : 'mt-2'}`}
						>
							<Link
								to={String(Menu.path)}
								className='flex items-center space-x-3 rounded-md p-2'
							>
								{Menu.icon}
								<span className={`${!open && 'hidden'} origin-left duration-200 `}>
									{Menu.title}
								</span>
							</Link>
						</li>
					))}
					<Logout open={open} />
				</ul>
			</div>
		</>
	);
};
export default SidebarAdmin;
