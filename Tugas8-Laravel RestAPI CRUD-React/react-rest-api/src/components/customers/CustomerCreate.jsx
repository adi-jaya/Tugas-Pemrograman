import { useContext, useEffect } from 'react';
import ComponentContext from '../../Context/ComponentContext';

export const CustomerCreate = () => {
	const { storeCustomer, customerFormValues, onChangeCustomer, errors, setErrors } = useContext(ComponentContext);

	useEffect(() => {
		setErrors({});
	}, [])

	return (
		<div className="mt-5">
			<form onSubmit={storeCustomer} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm">
				<div className="space-y-6">
					{/* Name Customer Input */}
					<div className="mb-4">
						<label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
						<input
							id="name" type="text" name="name" value={customerFormValues['name']} onChange={onChangeCustomer}
							className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
						/>
						{errors.name && (<span className="text-sm text-red-400">{ errors.name[0] }</span>)}
					</div>
					
					{/* Address Customer Input */}
					<div className="mb-4">
						<label htmlFor="address" className="block mb-2 text-sm font-medium">Address</label>
						<input 
							id="address" type="text" name="address" value={customerFormValues['address']} onChange={onChangeCustomer}
							className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
						/>
						{errors.address && (<span className="text-sm text-red-400">{ errors.address[0] }</span>)}
					</div>

					{/* Email Customer Input */}
					<div className="mb-4">
						<label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
						<input 
							id="email" type="email" name="email" value={customerFormValues['email']} onChange={onChangeCustomer}
							className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
						/>
						{errors.email && (<span className="text-sm text-red-400">{ errors.email[0] }</span>)}
					</div>

					{/* Phone Number Customer Input */}
					<div className="mb-4">
						<label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium">Phone Number</label>
						<input 
							id="phoneNumber" type="text" name="phoneNumber" value={customerFormValues['phoneNumber']} onChange={onChangeCustomer}
							className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
						/>
						{errors.phoneNumber && (<span className="text-sm text-red-400">{ errors.phoneNumber[0] }</span>)}
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