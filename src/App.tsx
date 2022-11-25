import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { Footer } from './components';
import { AuthGuard, RoleGuard } from './guards';
import { PrivateRoutes, PublicRoutes, Roles } from './models';
import store from './redux/store';
import { userLoggedIn } from './services';
import { RoutesWithNotFound } from './utils';

// Lazy loading en el componente padre de cada ruta para mejorar el rendimiento
const Home = lazy(async () => await import('./pages/Home/Home'));
const Login = lazy(async () => await import('./pages/Login/Login'));
const Register = lazy(async () => await import('./pages/Register/Register'));
const Private = lazy(async () => await import('./pages/Private/Private'));
const BackOffice = lazy(async () => await import('./pages/BackOffice/BackOffice'));

// function LoggedReddirection() {
// 	if (userLoggedIn() && sessionStorage.getItem('token') !== null) {
// 		return <Route path={PublicRoutes.LOGIN} element={<BackOffice />} />;
// 	} else {
// 		return <Route path={PublicRoutes.LOGIN} element={<Login />} />;
// 	}
// }

function App(): JSX.Element {
	return (
		<div className='App'>
			<Suspense fallback={<>Cargando</>}>
				<div className='relative min-h-screen pb-52'>
					<Provider store={store}>
						<RoutesWithNotFound>
							<Route path='/' element={<Home />} />

							<Route path={PublicRoutes.LOGIN} element={<Login />} />
							<Route path={PublicRoutes.REGISTER} element={<Register />} />

							{/* Rutas protegidas para usuarios logeados */}
							<Route element={<AuthGuard privateValidation={true} />}>
								<Route path={PublicRoutes.LOGIN} element={<BackOffice />} />
								<Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />

								{/* Rutas protegidas para usuarios con rol ADMIN */}
								<Route element={<RoleGuard roles={[Roles.ADMIN]} />}>
									<Route
										path={PrivateRoutes.BACKOFFICE}
										element={<BackOffice />}
									/>
								</Route>
							</Route>
						</RoutesWithNotFound>
					</Provider>
					<Footer />
				</div>
			</Suspense>
		</div>
	);
}

export default App;
