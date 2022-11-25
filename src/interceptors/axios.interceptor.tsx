import { SnackbarUtilities } from '@/utils';
import { getValidationError } from '@/utils/get-validation-error';
import axios, { AxiosRequestConfig } from 'axios';

// Interceptor for axios requests and responses to add headers and handle errors
export const AxiosInterceptor = () => {
	const updateHeaders = (request: AxiosRequestConfig) => {
		const token = sessionStorage.getItem('token');
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
			SnackbarUtilities.success('Success');
			return response;
		},
		async error => {
			SnackbarUtilities.error(getValidationError(error.code));
			return await Promise.reject(error);
		}
	);
};
