import { HomeIcon } from '@/assets';
import { PrivateRoutes } from '@/models';
import SidebarLink from './SidebarLink';

export default function Sidebar() {
	return (
		<div className='mr-6 flex h-screen w-60 flex-col rounded-lg bg-slate-700 p-5 shadow'>
			<div className='space-y-3'>
				<div className='flex items-center'>
					<h2 className='text-xl font-bold text-white'>BackOffice</h2>
				</div>
				<div className='flex-1'>
					<ul className='space-y-1 pt-2 pb-4 text-sm'>
						<SidebarLink
							path={PrivateRoutes.ADMINHOME}
							label='Home'
							icon={<HomeIcon />}
						/>
						<SidebarLink path={PrivateRoutes.USERS} label='Users' icon={<HomeIcon />} />
						<SidebarLink
							path={PrivateRoutes.RESERVATIONS}
							label='Reservations'
							icon={<HomeIcon />}
						/>
						<li className='rounded-sm'>
							<a href='#' className='flex items-center space-x-3 rounded-md p-2'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6 text-gray-100'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={2}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
									/>
								</svg>
								<span className='text-gray-100'></span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
