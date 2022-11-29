import { Link } from 'react-router-dom';

const Footer = (): JSX.Element => (
	<footer className='absolute bottom-0 w-full rounded-t-lg bg-white p-5 shadow dark:bg-slate-700 md:px-20 md:py-8'>
		<div className='sm:flex sm:items-center sm:justify-between '>
			<Link
				className='sm:mb-0text-sm mb-4 flex items-center font-bold uppercase leading-relaxed text-white'
				to='/'
			>
				SportKing 🟢
			</Link>
			<ul className='mb-6 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mb-0'>
				<li>
					<a href='#' className='mr-4 hover:underline md:mr-6 '>
						About
					</a>
				</li>
				<li>
					<a href='#' className='mr-4 hover:underline md:mr-6'>
						Privacy Policy
					</a>
				</li>
				<li>
					<a href='#' className='mr-4 hover:underline md:mr-6 '>
						Licensing
					</a>
				</li>
				<li>
					<a href='#' className='hover:underline'>
						Contact
					</a>
				</li>
			</ul>
		</div>
		<hr className='my-3 border-gray-200 dark:border-gray-700 sm:mx-auto' />
		<span className='block text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
			© 2022 SportKing™ . All Rights Reserved.
		</span>
	</footer>
);

export default Footer;
