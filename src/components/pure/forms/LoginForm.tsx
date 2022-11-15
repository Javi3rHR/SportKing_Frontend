// import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikInput from '../FormikInput';
import FormikButton from '../FormikButton';

// Define the form schema
const loginSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email format').required('Required'),
	username: Yup.string().required('Required'),
	password: Yup.string()
		.required('Required')
		.min(8, 'Password is too short - should be 8 chars minimum.'),
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
						<div className='m-auto w-full rounded-md bg-white p-6 shadow-md lg:max-w-md'>
							<h1 className='text-center text-3xl font-semibold text-purple-700 underline'>
								Sign in
							</h1>
							<Form onSubmit={handleSubmit} className='mt-6'>
								<FormikInput name='username' label='Username' />
								<FormikInput name='email' label='Email' />
								<FormikInput name='password' label='Password' />
								<FormikButton
									label='Login'
									type='submit'
									disabled={isSubmitting}
								/>
							</Form>
							<p className='mt-8 text-center text-xs font-light text-gray-700'>
								Do not have account?{' '}
								<a
									href='#'
									className='font-medium text-purple-600 hover:underline'
								>
									Sign up
								</a>
							</p>
						</div>
					</div>
				)}
			</Formik>
			{/* <TemplateForm
				initialValues={{}}
				validationSchema={loginSchema}
				FormTitle={'Register'}
			>
				<FormikInput name='username' label='Username' />
			</TemplateForm> */}
		</>
	);
};
export default LoginForm;
