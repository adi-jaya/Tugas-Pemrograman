import { useContext, useEffect } from 'react';
import ComponentContext from '../../Context/ComponentContext';
import { useParams } from 'react-router-dom';

export const ProductEdit = () => {
	const { product, getProduct, updateProduct, productFormValues, onChangeProduct} = useContext(ComponentContext);

	let { id } = useParams();

	useEffect(() => {
		getProduct(id);
	}, []);

	return (
		<div className="mt-5">
			<form onSubmit={updateProduct} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm">
				<div className="space-y-6">
					{/* Title/name Product Input */}
					<div className="mb-4">
						<label htmlFor="title" className="block mb-2 text-sm font-medium">Name</label>
						<input required
							id="title" type="text" name="title" value={productFormValues['title']} onChange={onChangeProduct}
							className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
						/>
					</div>
					
					{/* Category Product Input */}
					<div className="mb-4">
						<label htmlFor="category" className="block mb-2 text-sm font-medium">Category</label>
						<input required
							id="category" type="text" name="category" value={productFormValues['category']} onChange={onChangeProduct}
							className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
						/>
					</div>

					{/* Brand Product Input */}
					<div className="mb-4">
						<label htmlFor="brand" className="block mb-2 text-sm font-medium">Brand</label>
						<input required
							id="brand" type="text" name="brand" value={productFormValues['brand']} onChange={onChangeProduct}
							className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
						/>
					</div>

					{/* Price Product Input */}
					<div className="mb-4">
						<label htmlFor="price" className="block mb-2 text-sm font-medium">Price</label>
						<input required
							id="price" type="number" name="price" value={productFormValues['price']} onChange={onChangeProduct}
							className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
						/>
					</div>
					
					{/* Rating Product Input */}
					<div className="mb-4">
						<label htmlFor="rating" className="block mb-2 text-sm font-medium">Rating</label>
						<input required
							id="rating" type="text" name="rating" value={productFormValues['rating']} onChange={onChangeProduct}
							className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
						/>
					</div>
					
					{/* Stock Product Input */}
					<div className="mb-4">
						<label htmlFor="stock" className="block mb-2 text-sm font-medium">Stock</label>
						<input required
							id="stock" type="number" name="stock" value={productFormValues['stock']} onChange={onChangeProduct}
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