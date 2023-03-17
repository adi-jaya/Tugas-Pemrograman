import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ComponentContext from '../../Context/ComponentContext';

export const ProductIndex = () => {
	const { products, getProducts, deleteProduct, addProductToCart } = useContext(ComponentContext);

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className="mt-2">
			<div className="flex justify-end m-2 p-2">
				<Link to="/products/create" className="rounded-md bg-green-600 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500">
					New Product
				</Link>
			</div>
			<div className="relative overflow-x-auto">
				<table className="w-full text-sm text-left text-black">
					<thead className="text-xs text-white uppercase bg-gray-900">
						<tr>
							<th scope="col" className="px-6 py-3">Name</th>
							<th scope="col" className="px-6 py-3">Category</th>
							<th scope="col" className="px-6 py-3">Brand</th>
							<th scope="col" className="px-6 py-3">Price</th>
							<th scope="col" className="px-6 py-3">Rating</th>
							<th scope="col" className="px-6 py-3">Stock</th>
							<th scope="col" className="px-6 py-3">Action</th>
							<th scope="col" className="px-6 py-3"></th>
						</tr>
					</thead>
					<tbody>
						{
							products.map((product) => (
								<tr key={product.idProduct} className="bg-white border-b py-1">
									<td className="px-6 py-4">{product.title}</td>
									<td className="px-6 py-4 capitalize">{product.category}</td>
									<td className="px-6 py-4">{product.brand}</td>
									<td className="px-6 py-4">{product.price}$</td>
									<td className="px-6 py-4">★{product.rating}</td>
									<td className="px-6 py-4">{product.stock}</td>
									<td className="px-6 py-4 space-x-2">
										<Link to={`/products/${product.idProduct}/edit`} className="rounded-md bg-indigo-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
											Edit
										</Link>
										<button onClick={ () => deleteProduct(product.idProduct) } className="rounded-md bg-red-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-500">
											Delete
										</button>
									</td>

									{/* Add to Cart */}
									<td className="px-6 py-4 space-x-2">
										<button onClick={ () => addProductToCart(product.idProduct) } className="rounded-md bg-neutral-50 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-neutral-300">
											<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart">
												<circle cx="9" cy="21" r="1"></circle>
												<circle cx="20" cy="21" r="1"></circle>
												<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
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