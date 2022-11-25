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

	// Cada petición que se haga se le añade el token a menso que sea una petición de login o registro
	axios.interceptors.request.use(request => {
		if (request.url?.includes('register' || 'authenticate')) return request;
		return updateHeaders(request);
	});
};
