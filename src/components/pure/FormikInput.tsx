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
				className='block text-sm font-semibold text-white'
			>
				{label}
			</label>
			<Field
				id={name}
				name={name}
				type={type}
				className='mt-2 block w-full rounded-md bg-slate-800 px-4 py-2
				text-white focus:border-blue-400 focus:outline-none focus:ring
				focus:ring-blue-300 focus:ring-opacity-50'
			/>
			<ErrorMessage
				name={name}
				component='div'
				className='text-red-600'
			/>
		</div>
	);
};

export default FormikInput;
