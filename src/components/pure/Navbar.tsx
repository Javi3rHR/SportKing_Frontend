import { Link } from 'react-router-dom';

const Navbar = (): JSX.Element => {
	return (
		<nav className='relative mb-2 flex flex-wrap items-center justify-between bg-slate-700 px-2 py-5'>
			<div className='container mx-auto flex flex-wrap items-center justify-between px-20'>
				<div className='relative flex w-full justify-between px-4  lg:static lg:block lg:w-auto lg:justify-start'>
					<Link
						className='mr-4 inline-block whitespace-nowrap py-2 text-sm font-bold uppercase leading-relaxed text-white'
						to='/'
					>
						SportKing 🟢
					</Link>
					<button
						className='block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden'
						type='button'
					>
						<span className='relative block h-px w-6 rounded-sm bg-white'></span>
						<span className='relative mt-1 block h-px w-6 rounded-sm bg-white'></span>
						<span className='relative mt-1 block h-px w-6 rounded-sm bg-white'></span>
					</button>
				</div>
				<div
					className='flex-grow items-center lg:flex'
					id='example-navbar-warning'
				>
					<ul className='ml-auto flex list-none flex-col gap-2 lg:flex-row'>
						<li className='nav-item'>
							<Link
								className='text-md flex items-center rounded-lg bg-purple-600 px-4 py-2 font-medium leading-snug text-white hover:opacity-75'
								to='/login'
							>
								Comenzar
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								className='text-md flex items-center rounded-lg bg-blue-500 px-4 py-2 font-medium leading-snug text-white hover:opacity-75'
								to='/register'
							>
								Regístrate
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
