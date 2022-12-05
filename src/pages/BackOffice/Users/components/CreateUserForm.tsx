// import { useNavigate } from 'react-router-dom';
import { FormikButton, FormikInput } from '@/components';
import { createUser } from '@/services';
import { SnackbarUtilities } from '@/utils';
import { AxiosResponse } from 'axios';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

// Define the form schema
const FormSchema = Yup.object().shape({
	email: Yup.string().email('Formato incorrecto').required('Obligatorio'),
	username: Yup.string().required('Obligatorio'),
	name: Yup.string(),
	phone: Yup.string(),
	password: Yup.string().required('Obligatorio').min(4, 'Contraseña demasiado corta'),
});

// Login form component
const CreateUserForm = ({ handleClose, handleUpdate }: any): JSX.Element => {
	const initialCredentials = {
		username: '',
		email: '',
		name: '',
		phone: '',
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
					const newUser = {
						username: values.username,
						email: values.email,
						name: values.name,
						phone: values.phone,
						password: values.password,
					};
					createUser(newUser)
						.then(async (response: AxiosResponse) => {
							if (response.status === 200) {
								setSubmitMessage('');
								handleClose();
								handleUpdate();
								// await Swal.fire('Usuario creado con éxito');
								SnackbarUtilities.success('Usuario creado con éxito');
								location.reload();
							}
						})
						.catch(function (error) {
							if (error.response.status !== 200) {
								setSubmitMessage(error.response.data.message);
							}
						});
				}}
			>
				{({ handleSubmit, isSubmitting }) => (
					<div className='m-auto mb-60 mt-14 w-full max-w-md rounded-md bg-slate-700 p-12 shadow-md'>
						<h1 className='border-spacing-3 border-b-2 border-gray-400 pb-4 text-center text-3xl font-semibold text-white'>
							Crear Usuario
						</h1>
						<Form onSubmit={handleSubmit} className='mt-6'>
							<FormikInput name='username' label='Username' />
							<FormikInput name='email' label='Email' />
							<FormikInput name='name' label='Nombre' />
							<FormikInput name='phone' label='Teléfono' />
							<FormikInput type='password' name='password' label='Contraseña' />
							<FormikButton
								label='Crear'
								type='submit'
								disabled={isSubmitting && submitMessage === ''}
							/>
							{isSubmitting ? (
								<p className='mt-2 text-red-600'>{submitMessage}</p>
							) : null}
						</Form>
					</div>
				)}
			</Formik>
		</>
	);
};

export default CreateUserForm;
