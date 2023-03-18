import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ComponentContext from '../../Context/ComponentContext';

export const CustomerIndex = () => {
	const { customers, getCustomers, deleteCustomer, addCustomerToCart } = useContext(ComponentContext);

	useEffect( () => {
		getCustomers();
	}, []);

	return (
		<div className="mt-2">
			<div className="flex justify-end m-2 p-2">
				<Link to="/customers/create" className="rounded-md bg-green-600 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500">
					Add Customer
				</Link>
			</div>
			<div className="relative overflow-x-auto">
				<table className="w-full text-sm text-left text-black">
					<thead className="text-xs text-white uppercase bg-gray-900">
						<tr>
							<th scope="col" className="px-6 py-3">Name</th>
							<th scope="col" className="px-6 py-3">Address</th>
							<th scope="col" className="px-6 py-3">Email</th>
							<th scope="col" className="px-6 py-3">Phone Number</th>
							<th scope="col" className="px-6 py-3">Action</th>
							<th scope="col" className="px-6 py-3"></th>
						</tr>
					</thead>
					<tbody>
						{
							customers.map((customer) => (
								<tr key={customer.idCustomer} className="bg-white border-b py-1">
									<td className="px-6 py-4">{customer.name}</td>
									<td className="px-6 py-4 capitalize">{customer.address}</td>
									<td className="px-6 py-4">{customer.email}</td>
									<td className="px-6 py-4">{customer.phoneNumber}</td>
									<td className="px-6 py-4 space-x-2">
										<Link to={`/customers/${customer.idCustomer}/edit`} className="rounded-md bg-indigo-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
											Edit
										</Link>
										<button onClick={ () => deleteCustomer(customer.idCustomer) } className="rounded-md bg-red-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-500">
											Delete
										</button>
									</td>
									
									{/* Add to Cart */}
									<td className="px-6 py-4 space-x-2">
										<button onClick={ () => addCustomerToCart(customer.idCustomer) } className="rounded-md bg-neutral-50 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-neutral-300">
											<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-check">
												<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
												<circle cx="8.5" cy="7" r="4"></circle>
												<polyline points="17 11 19 13 23 9"></polyline>
											</svg>
										</button>
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		</div>
	)
}