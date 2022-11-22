// import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikInput from '../pure/FormikInput';
import FormikButton from '../pure/FormikButton';
import { Link } from 'react-router-dom';
import Navbar from '../pure/Navbar';
import { AxiosResponse } from 'axios';
import { useState } from 'react';
import { login } from '@/services';

// Define the form schema
const loginSchema = Yup.object().shape({
	// email: Yup.string().email('Formato incorrecto').required('Obligatorio'),
	username: Yup.string().required('Obligatorio'),
	password: Yup.string()
		.required('Obligatorio')
		.min(4, 'Contraseña demasiado corta'),
});

// Login form component
const LoginForm = (): JSX.Element => {
	const initialCredentials = {
		// email: '',
		username: '',
		password: '',
	};

	const [submitMessage, setSubmitMessage] = useState('');

	// const navigate = useNavigate();

	return (
		<>
			<Navbar />
			<Formik
				initialValues={initialCredentials}
				validationSchema={loginSchema}
				onSubmit={values => {
					login(values.username, values.password)
						.then((response: AxiosResponse) => {
							if (response.status === 200) {
								setSubmitMessage('');
								if (
									response.data.token !== undefined &&
									response.data.token !== null
								) {
									sessionStorage.setItem(
										'token',
										response.data.token
									);
									// navigate('/');
									alert(sessionStorage.getItem('token'));
								} else {
									throw new Error(
										'Error generating Login Token'
									);
								}
							} else {
								throw new Error('Error logging in');
							}
						})
						.catch(function (error) {
							if (error.response.status !== 200) {
								// alert(error.response.data.message);
								setSubmitMessage('Credenciales invalidas');
							}
						});
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					setFieldValue,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
					<div className='m-auto mt-14 w-full max-w-md rounded-md bg-slate-700 p-12 shadow-md'>
						<h1 className='border-spacing-3 border-b-2 border-gray-400 pb-4 text-center text-3xl font-semibold text-white'>
							Inicia sesión
						</h1>
						<Form onSubmit={handleSubmit} className='mt-6'>
							<FormikInput name='username' label='Username' />
							{/* <FormikInput name='email' label='Email' /> */}
							<FormikInput
								type='password'
								name='password'
								label='Contraseña'
							/>
							<Link
								className='float-right pb-4 text-blue-500'
								to='/recover-pass'
							>
								¿Olvidaste tu contraseña?
							</Link>
							<FormikButton
								label='Login'
								type='submit'
								disabled={isSubmitting && submitMessage === ''}
							/>
							{isSubmitting ? (
								<p className='mt-2 text-red-600'>
									{submitMessage}
								</p>
							) : null}
						</Form>
						<p className='mt-8 text-center text-xs font-light text-blue-600'>
							<Link
								to='/register'
								className='font-medium hover:underline'
							>
								¿No tienes cuenta? Regístrate
							</Link>
						</p>
					</div>
				)}
			</Formik>
		</>
	);
};
export default LoginForm;
