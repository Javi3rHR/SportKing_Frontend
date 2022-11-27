// import { SnackbarUtilities } from '@/utils';
import { getValidationError } from '@/utils/get-validation-error';
import { AxiosRequestConfig } from 'axios';
import { axiosConfig as axios, SnackbarUtilities } from '@/utils';

// Interceptor for axios requests and responses to add headers and handle errors
export const AxiosInterceptor = () => {
	const updateHeaders = (request: AxiosRequestConfig) => {
		const token = localStorage.getItem('token');
		const newHeaders = {
			Authorization: `Bearer ${token ?? ''}`,
			'Content-Type': 'application/json',
		};
		request.headers = newHeaders;
		return request;
	};

	// Cada petición que se haga se le añade el token a menos que sea una petición de login o registro
	axios.interceptors.request.use(request => {
		if (request.url?.includes('register' || 'authenticate')) return request;
		return updateHeaders(request);
	});

	// Cada respuesta que se reciba se comprueba si es un error y se muestra el mensaje de error
	axios.interceptors.response.use(
		response => {
			console.log('response', response);
			// SnackbarUtilities.success('Success');
			return response;
		},
		async error => {
			if (error.response.data.message !== undefined) {
				// Si la API ya tiene un mensaje de error se muestra
				SnackbarUtilities.error(error.response.data.message);
			} else {
				// Si la api no tiene un mensaje de error utiliza el mensaje de error por defecto
				SnackbarUtilities.error(getValidationError(error.response.status));
			}
			return await Promise.reject(error);
		}
	);
};
