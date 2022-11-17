import Footer from './components/pure/Footer';
import { AppRoutes } from './routes/Routes';

function App(): JSX.Element {
	return (
		<div className='App'>
			<div className='relative min-h-screen pb-52'>
				<AppRoutes></AppRoutes>
				<Footer />
			</div>
		</div>
	);
}

export default App;
