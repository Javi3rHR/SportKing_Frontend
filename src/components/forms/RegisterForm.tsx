// import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '@/models';
import { UserKey } from '@/redux/states/user';
import { clearLocalStorage } from '@/utils';
import { AxiosResponse } from 'axios';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { register } from '../../services/auth.service';
import FormikButton from '../pure/FormikButton';
import FormikInput from '../pure/FormikInput';

// Define the form schema
const FormSchema = Yup.object().shape({
	email: Yup.string().email('Formato incorrecto').required('Obligatorio'),
	username: Yup.string().required('Obligatorio'),
	// name: Yup.string().required('Obligatorio'),
	password: Yup.string().required('Obligatorio').min(4, 'Contraseña demasiado corta'),
	// passwordConfirm: Yup.string()
	// 	.oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
	// 	.required('Obligatorio'),
});

// Login form component
const RegisterForm = (): JSX.Element => {
	const initialCredentials = {
		username: '',
		email: '',
		// name: '',
		password: '',
	};

	const [submitMessage, setSubmitMessage] = useState('');
	// const navigate = useNavigate();

	// const navigate = useNavigate();

	return (
		<>
			<Formik
				initialValues={initialCredentials}
				validationSchema={FormSchema}
				onSubmit={values => {
					// alert(JSON.stringify(values, null, 2));
					register(
						values.username,
						values.email,
						values.password
						// values.name,
					)
						.then((response: AxiosResponse) => {
							if (response.status === 200) {
								setSubmitMessage('');
								Swal.fire({
									title: '¿Quieres iniciar sesión?',
									showDenyButton: true,
									confirmButtonText: 'Sí',
									denyButtonText: 'No',
									customClass: {
										actions: 'my-actions',
										confirmButton: 'order-2',
										denyButton: 'order-3',
									},
								})
									.then(async result => {
										clearLocalStorage(UserKey);
										clearLocalStorage('token');
										if (result.isConfirmed) {
											window.location.href = PublicRoutes.LOGIN; // <Navigate replace to={PublicRoutes.LOGIN} />;
										} else {
											window.location.href = PublicRoutes.HOME;
										}
									})
									.catch(err => {
										console.log(err);
									});
							}
						})
						.catch(function (error) {
							if (error.response.status !== 200) {
								setSubmitMessage(error.response.data.message);
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
					<div className='m-auto mb-60 mt-14 w-full max-w-md rounded-md bg-slate-700 p-12 shadow-md'>
						<h1 className='border-spacing-3 border-b-2 border-gray-400 pb-4 text-center text-3xl font-semibold text-white'>
							Regístrate
						</h1>
						<Form onSubmit={handleSubmit} className='mt-6'>
							<FormikInput name='username' label='Username' />
							<FormikInput name='email' label='Email' />
							{/* <FormikInput name='name' label='Nombre' /> */}
							<FormikInput type='password' name='password' label='Contraseña' />
							{/* <FormikInput
								type='password'
								name='passwordConfirm'
								label='Confirmar Contraseña'
							/> */}
							<label className='my-4 block text-sm font-semibold text-gray-300'>
								<input type='checkbox' className='mr-1' />
								He leído y acepto la política de privacidad
							</label>
							<FormikButton
								label='Registrarme'
								type='submit'
								disabled={isSubmitting && submitMessage === ''}
							/>
							{isSubmitting ? (
								<p className='mt-2 text-red-600'>{submitMessage}</p>
							) : null}
						</Form>
						<p className='mt-8 text-center text-xs font-light text-blue-600'>
							<Link to='/login' className='font-medium hover:underline'>
								Ya tienes cuenta? Inicia sesión
							</Link>
						</p>
					</div>
				)}
			</Formik>
		</>
	);
};

export default RegisterForm;
