import Footer from './components/pure/Footer';
import { AppRoutes } from './routes/Routes';

function App(): JSX.Element {
	return (
		<div className='App'>
			<AppRoutes></AppRoutes>
			<Footer></Footer>
		</div>
	);
}

export default App;
