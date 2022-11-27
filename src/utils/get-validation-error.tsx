import { TypeWithKey } from '@/models/type-with-key';

// Objeto de errores que puedan ser devueltos por la API
export const getValidationError = (errorCode: any) => {
	const codeMatcher: TypeWithKey<string> = {
		401: 'Acceso no autorizado',
		403: 'Acceso denegado',
		404: 'No encontrado',
		409: 'Ya existe',
		500: 'Error interno del servidor',
		503: 'Servicio no disponible',
		504: 'Tiempo de espera agotado',
	};

	return codeMatcher[errorCode];
};
