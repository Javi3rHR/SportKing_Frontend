// import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikInput from '../pure/FormikInput';
import FormikButton from '../pure/FormikButton';
import { Link } from 'react-router-dom';
import Navbar from '../pure/Navbar';
import { login } from '../../services/authService';
import { AxiosResponse } from 'axios';

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
								alert('Credenciales invalidas');
							}
						})
						.catch(error =>
							console.error(
								// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
								`[LOGIN ERROR]: Something went wrong: ${error}`
							)
						);
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
								disabled={isSubmitting}
							/>
							{isSubmitting ? (
								<p>Checking credentials...</p>
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
