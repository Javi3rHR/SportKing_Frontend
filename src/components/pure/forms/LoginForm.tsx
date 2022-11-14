import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';

// Define the form schema
const loginSchema = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email format')
		.required('Email is required'),
	username: Yup.string().required('Username is required'),
	password: Yup.string().required('Password is required'),
});

// Login form component
const LoginForm = (): JSX.Element => {
	const initialCredentials = {
		email: '',
		username: '',
		password: '',
	};

	const navigate = useNavigate();

	return (
		<div>
			{/* <Formik
				initialValues={initialCredentials}
				validationSchema={loginSchema}
				onSubmit={async values => {}}
			>

            </Formik> */}
		</div>
	);
};
