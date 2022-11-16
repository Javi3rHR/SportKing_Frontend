// import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikInput from '../pure/FormikInput';
import FormikButton from '../pure/FormikButton';
import { Link, Navigate } from 'react-router-dom';
import Navbar from '../pure/Navbar';

// Define the form schema
const loginSchema = Yup.object().shape({
	email: Yup.string().email('Formato incorrecto').required('Obligatorio'),
	username: Yup.string().required('Obligatorio'),
	password: Yup.string()
		.required('Obligatorio')
		.min(8, 'Contraseña demasiado corta'),
});

// Login form component
const LoginForm = (): JSX.Element => {
	const initialCredentials = {
		email: '',
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
					alert(JSON.stringify(values, null, 2));
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
					<div className='relative flex min-h-screen flex-col justify-center overflow-hidden'>
						<div className='m-auto w-full rounded-md bg-slate-700 p-6 shadow-md lg:max-w-md'>
							<h1 className='text-center text-3xl font-semibold text-white'>
								Inicia sesión
							</h1>
							<Form onSubmit={handleSubmit} className='mt-6'>
								<FormikInput name='username' label='Username' />
								<FormikInput name='email' label='Email' />
								<FormikInput
									type='password'
									name='password'
									label='Contraseña'
								/>
								<FormikButton
									label='Login'
									type='submit'
									disabled={isSubmitting}
								/>
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
					</div>
				)}
			</Formik>
		</>
	);
};
export default LoginForm;
