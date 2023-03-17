import { useEffect, useContext } from 'react';
import ComponentContext from '../../Context/ComponentContext';

export const CartIndex = () => {
	const { carts, getCarts, deleteCart } = useContext(ComponentContext);

	useEffect(() => {
		getCarts();
	}, []);

	return (
		<div className="mt-12">
			<div className="relative overflow-x-auto">
				<table className="w-full text-sm text-left text-black">
					<thead className="text-xs text-white uppercase bg-gray-900">
						<tr>
							<th scope="col" className="px-6 py-3">Customer</th>
							<th scope="col" className="px-6 py-3">Product</th>
							<th scope="col" className="px-6 py-3">Cost</th>
							<th scope="col" className="px-6 py-3"></th>
						</tr>
					</thead>
					<tbody>
						{
							carts.map((cart) => (
								<tr key={cart.idCart} className="bg-white border-b py-1">
									<td className="px-6 py-4">{cart.customer}</td>
									<td className="px-6 py-4 capitalize">{cart.product}</td>
									<td className="px-6 py-4">{cart.cost}</td>
									<td className="px-6 py-4">
										<button onClick={ () => deleteCart(cart.idCart) } className="rounded-md bg-red-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-500">
											Delete
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
