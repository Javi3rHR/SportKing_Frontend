import { Form, Formik } from 'formik';

interface TemplateFormProps {
	initialValues: {
		[key: string]: string;
	};
	onSubmit: (values: any) => void;
	validationSchema: any;
	children: React.ReactNode;
}

const TemplateForm: React.FC<TemplateFormProps> = ({
	initialValues,
	onSubmit,
	validationSchema,
	children,
}) => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			<div className='relative flex min-h-screen flex-col justify-center overflow-hidden'>
				<div className='m-auto w-full rounded-md bg-white p-6 shadow-md lg:max-w-md'>
					<h1 className='text-center text-3xl font-semibold text-purple-700 underline'></h1>
					<Form className='w-full max-w-xs'>{children}</Form>
				</div>
			</div>
		</Formik>
	);
};

export default TemplateForm;
