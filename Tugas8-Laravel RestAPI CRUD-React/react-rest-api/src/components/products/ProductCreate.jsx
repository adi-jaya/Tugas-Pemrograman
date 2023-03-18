import { useContext, useEffect } from 'react';
import ComponentContext from '../../Context/ComponentContext';

export const ProductCreate = () => {
	const { productFormValues, onChangeProduct, storeProduct, errors, setErrors } = useContext(ComponentContext);

	useEffect(() => {
		setErrors({});
	}, [])

	return (
		<div className="mt-5">
			<form onSubmit={storeProduct} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm">
				<div className="space-y-6">
					{/* Title/name Product Input */}
					<div className="mb-4">
						<label htmlFor="title" className="block mb-2 text-sm font-medium">Name</label>
						<input
							id="title" type="text" name="title" value={productFormValues['title']} onChange={onChangeProduct}
							className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
						/>
						{errors.title && (<span className="text-sm text-red-400">{ errors.title[0] }</span>)}
					</div>
					
					{/* Category Product Input */}
					<div className="mb-4">
						<label htmlFor="category" className="block mb-2 text-sm font-medium">Category</label>
						<input 
							id="category" type="text" name="category" value={productFormValues['category']} onChange={onChangeProduct}
							className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
						/>
						{errors.category && (<span className="text-sm text-red-400">{ errors.category[0] }</span>)}
					</div>

					{/* Brand Product Input */}
					<div className="mb-4">
						<label htmlFor="brand" className="block mb-2 text-sm font-medium">Brand</label>
						<input 
							id="brand" type="text" name="brand" value={productFormValues['brand']} onChange={onChangeProduct}
							className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
						/>
						{errors.brand && (<span className="text-sm text-red-400">{ errors.brand[0] }</span>)}
					</div>

					{/* Price Product Input */}
					<div className="mb-4">
						<label htmlFor="price" className="block mb-2 text-sm font-medium">Price</label>
						<input 
							id="price" type="number" name="price" value={productFormValues['price']} onChange={onChangeProduct}
							className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
						/>
						{errors.price && (<span className="text-sm text-red-400">{ errors.price[0] }</span>)}
					</div>
					
					{/* Rating Product Input */}
					<div className="mb-4">
						<label htmlFor="rating" className="block mb-2 text-sm font-medium">Rating</label>
						<input 
							id="rating" type="text" name="rating" value={productFormValues['rating']} onChange={onChangeProduct}
							className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
						/>
						{errors.rating && (<span className="text-sm text-red-400">{ errors.rating[0] }</span>)}
					</div>
					
					{/* Stock Product Input */}
					<div className="mb-4">
						<label htmlFor="stock" className="block mb-2 text-sm font-medium">Stock</label>
						<input 
							id="stock" type="number" name="stock" value={productFormValues['stock']} onChange={onChangeProduct}
							className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
						/>
						{errors.stock && (<span className="text-sm text-red-400">{ errors.stock[0] }</span>)}
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