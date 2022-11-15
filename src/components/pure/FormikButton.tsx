interface FormikButtonProps {
	label: string;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	onClick?: () => void;
}

const FormikButton: React.FC<FormikButtonProps> = ({
	label,
	type = 'submit',
	disabled = false,
	onClick,
}) => {
	return (
		<button
			type={type}
			className='w-full transform rounded-md bg-purple-600 px-4 py-2 tracking-wide text-white shadow-md transition-colors duration-200 hover:bg-purple-700 focus:bg-purple-700
			focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
			disabled={disabled}
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default FormikButton;
