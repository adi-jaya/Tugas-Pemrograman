import { useContext, useEffect } from 'react';
import ComponentContext from '../../Context/ComponentContext';
import { useParams } from 'react-router-dom';

export const CustomerEdit = () => {
	const { customer, getCustomer, updateCustomer, customerFormValues, onChangeCustomer } = useContext(ComponentContext);

	let { id } = useParams();

	useEffect(() => {
		getCustomer(id);
	}, []);

	return (
		<div className="mt-5">
			<form onSubmit={updateCustomer} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm">
				<div className="space-y-6">
					{/* Name Customer Input */}
					<div className="mb-4">
						<label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
						<input required
							id="name" type="text" name="name" value={customerFormValues['name']} onChange={onChangeCustomer}
							className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
						/>
					</div>
					
					{/* Address Customer Input */}
					<div className="mb-4">
						<label htmlFor="address" className="block mb-2 text-sm font-medium">Address</label>
						<input required
							id="address" type="text" name="address" value={customerFormValues['address']} onChange={onChangeCustomer}
							className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
						/>
					</div>

					{/* Email Customer Input */}
					<div className="mb-4">
						<label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
						<input required
							id="email" type="email" name="email" value={customerFormValues['email']} onChange={onChangeCustomer}
							className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
						/>
					</div>

					{/* Phone Number Customer Input */}
					<div className="mb-4">
						<label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium">Phone Number</label>
						<input required
							id="phoneNumber" type="text" name="phoneNumber" value={customerFormValues['phoneNumber']} onChange={onChangeCustomer}
							className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
						/>
					</div>
				</div>
				<div className="my-4">
					<button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
						Store
					</button>
				</div>
			</form>
		</div>
	)
}