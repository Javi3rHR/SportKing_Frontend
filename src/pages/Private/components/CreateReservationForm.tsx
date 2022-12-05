/* eslint-disable @typescript-eslint/restrict-plus-operands */
// import { useNavigate } from 'react-router-dom';
import { FormikButton, FormikInput } from '@/components';
import { createReservation } from '@/services';
import { SnackbarUtilities } from '@/utils';
import { AxiosResponse } from 'axios';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

// Define the form schema
const FormSchema = Yup.object().shape({
	time_interval_id: Yup.string().required('Obligatorio'),
	reservation_date: Yup.date().required('Obligatorio'),
	paid: Yup.string(),
});

// Componente para crear una reserva
const CreateReservationForm = ({ handleClose }: any): JSX.Element => {
	const initialCredentials = {
		time_interval_id: '',
		reservation_date: new Date(),
		paid: false,
	};

	const [submitMessage, setSubmitMessage] = useState('');

	// Formatear fecha para enviarla al backend en formato dd/mm/yyyys
	const formatDate = (date: Date) => {
		const d = new Date(date);
		const month = '' + (d.getMonth() + 1);
		const day = '' + d.getDate();
		const year = d.getFullYear();

		return [day, month, year].join('/');
	};

	return (
		<>
			<Formik
				initialValues={initialCredentials}
				validationSchema={FormSchema}
				onSubmit={values => {
					const newReservation = {
						time_interval_id: values.time_interval_id,
						reservation_date: formatDate(values.reservation_date),
						paid: values.paid,
					};
					const currentuserId = JSON.parse(localStorage.getItem('user') ?? '').user_id;
					createReservation(
						Number(currentuserId),
						newReservation.time_interval_id,
						newReservation.reservation_date,
						newReservation.paid
					)
						.then(async (response: AxiosResponse) => {
							if (response.status === 201) {
								setSubmitMessage('');
								handleClose();
								SnackbarUtilities.success('Reserva creada con éxito');
								location.reload();
							}
						})
						.catch(function (error) {
							if (error.response.status !== 201) {
								setSubmitMessage(error.response.data.message);
							}
						});
				}}
			>
				{({ handleSubmit, isSubmitting }) => (
					<div className='m-auto mb-60 mt-14 w-full max-w-md rounded-md bg-slate-700 p-12 shadow-md'>
						<h1 className='border-spacing-3 border-b-2 border-gray-400 pb-4 text-center text-3xl font-semibold text-white'>
							Reservar pista
						</h1>
						<Form onSubmit={handleSubmit} className='mt-6'>
							<FormikInput name='time_interval_id' label='Horario ID' type='string' />
							<FormikInput name='reservation_date' label='Fecha' type='date' />
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

export default CreateReservationForm;
