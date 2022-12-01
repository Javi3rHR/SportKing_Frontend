// import { useNavigate } from 'react-router-dom';
import { PrivateRoutes, UserInfo } from '@/models';
import { createUser } from '@/redux/states/user';
import { login } from '@/services';
import { persistLocalStorage } from '@/utils';
import { AxiosResponse } from 'axios';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import * as Yup from 'yup';
import FormikButton from '../pure/FormikButton';
import FormikInput from '../pure/FormikInput';

// Define the form schema
const loginSchema = Yup.object().shape({
	// email: Yup.string().email('Formato incorrecto').required('Obligatorio'),
	username: Yup.string().required('Obligatorio'),
	password: Yup.string().required('Obligatorio').min(4, 'Contraseña demasiado corta'),
});

// Login form component
const LoginForm = (): JSX.Element => {
	const initialCredentials = {
		// email: '',
		username: '',
		password: '',
	};

	const [submitMessage, setSubmitMessage] = useState('');
	const dispatch = useDispatch();

	return (
		<>
			<Formik
				initialValues={initialCredentials}
				validationSchema={loginSchema}
				onSubmit={values => {
					login(values.username, values.password)
						.then(async (response: AxiosResponse) => {
							if (response.status === 200) {
								setSubmitMessage('');
								if (
									response.data.token !== undefined &&
									response.data.token !== null
								) {
									persistLocalStorage('token', response.data.token);
									if (
										response.data.user !== undefined &&
										response.data.user !== null
									) {
										const user: UserInfo = response.data.user;
										dispatch(createUser(user));
										// <Navigate replace to={`${PrivateRoutes.BACKOFFICE}`} />;
									}
								} else {
									throw new Error('Error generating Login Token');
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
					<div className='m-auto mt-14 mb-60 w-full max-w-md rounded-md bg-slate-700 p-12 shadow-md '>
						<h1 className='border-spacing-3 border-b-2 border-gray-400 pb-4 text-center text-3xl font-semibold text-white'>
							Inicia sesión
						</h1>
						<Form onSubmit={handleSubmit} className='mt-6'>
							<FormikInput name='username' label='Username' />
							{/* <FormikInput name='email' label='Email' /> */}
							<FormikInput type='password' name='password' label='Contraseña' />
							<Link className='float-right pb-4 text-blue-500' to='/login'>
								¿Olvidaste tu contraseña?
							</Link>
							<FormikButton
								label='Login'
								type='submit'
								disabled={isSubmitting && submitMessage === ''}
							/>
							{isSubmitting ? (
								<p className='mt-2 text-red-600'>{submitMessage}</p>
							) : null}
						</Form>
						<p className='mt-8 text-center text-xs font-light text-blue-600'>
							<Link to='/register' className='font-medium hover:underline'>
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
