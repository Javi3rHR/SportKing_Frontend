import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { Footer } from './components';
import { AuthGuard, RoleGuard } from './guards';
import { PrivateRoutes, PublicRoutes, Roles } from './models';
import { Home, Login, Private, Register } from './pages';
import { BackOffice } from './pages/BackOffice';
import store from './redux/store';
import { RoutesWithNotFound } from './utils';

function App(): JSX.Element {
	return (
		<div className='App'>
			<Suspense fallback={<>Cargando</>}>
				<div className='relative min-h-screen pb-52'>
					<Provider store={store}>
						<RoutesWithNotFound>
							<Route path='/' element={<Home />} />
							<Route
								path={PublicRoutes.LOGIN}
								element={<Login />}
							/>
							<Route
								path={PublicRoutes.REGISTER}
								element={<Register />}
							/>

							{/* Rutas protegidas para usuarios logeados */}
							<Route
								element={<AuthGuard privateValidation={true} />}
							>
								<Route
									path={`${PrivateRoutes.PRIVATE}/*`}
									element={<Private />}
								/>
							</Route>

							{/* Rutas protegidas para usuarios con rol ADMIN */}
							<Route element={<RoleGuard role={Roles.ADMIN} />}>
								<Route
									path={PrivateRoutes.BACKOFFICE}
									element={<BackOffice />}
								/>
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
