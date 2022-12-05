import { Route, Routes } from 'react-router-dom';

interface Props {
	children: JSX.Element[] | JSX.Element;
}

// Componente que renderiza las rutas y en caso de no encontrar ninguna, renderiza la página 404
function RoutesWithNotFound({ children }: Props) {
	return (
		<Routes>
			{children}
			<Route path='*' element={<div>Not Found</div>} />
		</Routes>
	);
}
export default RoutesWithNotFound;
