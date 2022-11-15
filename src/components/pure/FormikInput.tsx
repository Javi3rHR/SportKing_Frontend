import { ErrorMessage, Field } from 'formik';

interface FormikInputProps {
	name: string;
	label: string;
	type?: string;
}

const FormikInput: React.FC<FormikInputProps> = ({
	name,
	label,
	type = 'text',
}) => {
	return (
		<div className='mb-2'>
			<label
				htmlFor={name}
				className='block text-sm font-semibold text-gray-800'
			>
				{label}
			</label>
			<Field
				id={name}
				name={name}
				type={type}
				className='mt-2 block w-full rounded-md border bg-white px-4 py-2
				text-purple-700 focus:border-purple-400 focus:outline-none focus:ring
				focus:ring-purple-300 focus:ring-opacity-40'
			/>
			<ErrorMessage
				name={name}
				component='div'
				className='text-red-500'
			/>
		</div>
	);
};

export default FormikInput;
