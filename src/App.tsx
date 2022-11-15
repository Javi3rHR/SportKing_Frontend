import { Link } from 'react-router-dom';
import './App.css';
import { AppRoutes } from './routes/Routes';

function App(): JSX.Element {
	return (
		<div className='App'>
			<header>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/login'>Iniciar Sesión</Link>
						</li>
					</ul>
				</nav>
			</header>
			<AppRoutes></AppRoutes>
		</div>
	);
}

export default App;
