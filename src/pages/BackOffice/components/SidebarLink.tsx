import { Link } from 'react-router-dom';

interface SidebarLinkInterface {
	label: string;
	path: string;
	icon: JSX.Element;
}

export default function SidebarLink({ label, path, icon }: SidebarLinkInterface): JSX.Element {
	// const { pathname } = useLocation();
	// const active = pathname === path;

	return (
		<li className='rounded-sm'>
			<Link to={path} className='flex items-center space-x-3 rounded-md p-2'>
				{icon}
				<span className='text-gray-100'>{label}</span>
			</Link>
		</li>
	);
}
