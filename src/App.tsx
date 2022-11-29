import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { Footer } from './components';
import { AuthGuard, LoginRedirectGuard, RoleGuard } from './guards';
import { PrivateRoutes, PublicRoutes, Roles } from './models';
import store from './redux/store';
import { RoutesWithNotFound, SnackbarUtilitiesConfigurator } from './utils';
import LinearProgress from '@mui/material/LinearProgress';
import { SnackbarProvider } from 'notistack';

// Lazy loading en el componente padre de cada ruta para mejorar el rendimiento
const Home = lazy(async () => await import('./pages/Home/Home'));
const Login = lazy(async () => await import('./pages/Login/Login'));
const Register = lazy(async () => await import('./pages/Register/Register'));
const Private = lazy(async () => await import('./pages/Private/Private'));
const BackOffice = lazy(async () => await import('./pages/BackOffice/BackOffice'));

function App(): JSX.Element {
	return (
		<div className='App'>
			<Suspense fallback={<LinearProgress />}>
				<div className='relative min-h-screen'>
					<SnackbarProvider maxSnack={4}>
						<SnackbarUtilitiesConfigurator />
						<Provider store={store}>
							<RoutesWithNotFound>
								<Route path='/' element={<Home />} />

								<Route element={<LoginRedirectGuard />}>
									<Route path={PublicRoutes.LOGIN} element={<Login />} />
								</Route>

								<Route path={PublicRoutes.REGISTER} element={<Register />} />

								{/* Rutas protegidas para usuarios logeados */}
								<Route element={<AuthGuard privateValidation={true} />}>
									<Route
										path={`${PrivateRoutes.PRIVATE}/*`}
										element={<Private />}
									/>

									{/* Rutas protegidas para usuarios con rol ADMIN */}
									<Route element={<RoleGuard roles={[Roles.ADMIN]} />}>
										<Route
											path={`${PrivateRoutes.BACKOFFICE}/*`}
											element={<BackOffice />}
										/>
									</Route>
								</Route>
							</RoutesWithNotFound>
						</Provider>
					</SnackbarProvider>
				</div>
			</Suspense>
		</div>
	);
}

export default App;
