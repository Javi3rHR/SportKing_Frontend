// import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikInput from '../FormikInput';
import FormikButton from '../FormikButton';
import { Link } from 'react-router-dom';

// Define the form schema
const FormSchema = Yup.object().shape({
	email: Yup.string().email('Formato incorrecto').required('Obligatorio'),
	username: Yup.string().required('Obligatorio'),
	name: Yup.string().required('Obligatorio'),
	password: Yup.string()
		.required('Obligatorio')
		.min(8, 'Contraseña demasiado corta'),
	passwordConfirm: Yup.string().oneOf(
		[Yup.ref('password'), null],
		'Las contraseñas deben coincidir'
	),
});

// Login form component
const RegisterForm = (): JSX.Element => {
	const initialCredentials = {
		email: '',
		username: '',
		password: '',
	};

	// const navigate = useNavigate();

	return (
		<>
			<Formik
				initialValues={initialCredentials}
				validationSchema={FormSchema}
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
						<div className='m-auto w-full rounded-md bg-white p-6 shadow-md lg:max-w-md'>
							<h1 className='text-center text-3xl font-semibold text-purple-700 underline'>
								Regístrate
							</h1>
							<Form onSubmit={handleSubmit} className='mt-6'>
								<FormikInput name='username' label='Username' />
								<FormikInput name='email' label='Email' />
								<FormikInput name='name' label='Nombre' />
								<FormikInput
									type='password'
									name='password'
									label='Contraseña'
								/>
								<FormikInput
									type='password'
									name='passwordConfirm'
									label='Confirmar Contraseña'
								/>

								<FormikButton
									label='Registrarme'
									type='submit'
									disabled={isSubmitting}
								/>
							</Form>
							<p className='mt-8 text-center text-xs font-light text-purple-600'>
								<Link
									to='/login'
									className='font-medium hover:underline'
								>
									Ya tienes cuenta? Inicia sesión
								</Link>
							</p>
						</div>
					</div>
				)}
			</Formik>
		</>
	);
};
export default RegisterForm;
