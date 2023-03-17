import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import  axios from 'axios';
import ComponentContext from '../../Context/ComponentContext';

export const CartCreate = () => {
	const { productCart, customerCart } = useContext(ComponentContext);
	const navigate = useNavigate();

	// const [quantity, setQuantity] = useState(1);
	const [customer, setCustomer] = useState('');
	const [product, setProduct] = useState('');
	const [cost, setCost] = useState(0);
	const [dataOrder, setDataOrder] = useState({
			idProduct: '',
			product: '',
			idCustomer: '',
			customer: '',
			quantity: '',
			cost: '',
	});

	useEffect(() => {
		if(productCart.length !== 0 && customerCart.length !== 0 )
		{
			setCustomer(customerCart[0].name);
			setProduct(productCart[0].title);
			setCost(productCart[0].price);

			setDataOrder({
				idProduct: productCart[0].idProduct,
				product: productCart[0].title,
				idCustomer: customerCart[0].idCustomer,
				customer: customerCart[0].name,
				quantity: 1,
				cost: productCart[0].price,
			})
		}
	}, [])

	const checkout = async (event) => {
		event.preventDefault();
		try{
			const response = await axios.post('carts', dataOrder);
			window.alert(response.data);
			navigate('/carts');
		}
		catch (event)
		{
			if (event.response.status === 422) {
				window.alert('Data required');
			}
		}
	}
	

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
						<tr className="bg-white border-b py-1">
							<td className="px-6 py-4">{customer}</td>
							<td className="px-6 py-4">{product}</td>
							<td className="px-6 py-4">{cost}</td>
							<td className="px-6 py-4">
								<button onClick={checkout} className="rounded-md bg-neutral-50 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-neutral-300">
									<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
										<path
											d="m482 447-80-80 53-52H317V203h138l-52-52 79-80 187 188-187 188ZM258.628 983q-32.328
											0-54.978-22.876t-22.65-55Q181 873 203.876 850.5t55-22.5Q291 828 313.5 850.728t22.5 54.644q0 
											32.328-22.728 54.978T258.628 983Zm440.5 0Q667 983 644.5 960.124t-22.5-55Q622 873 644.728 
											850.5t54.644-22.5Q732 828 754 850.728t22 54.644q0 32.328-22.372 54.978-22.371 22.65-54.5 
											22.65ZM19 277V165h166l151 351h298.505L743 262h126L731 574q-12 24-33.898 39.5Q675.203 629 647 
											629H332l-29 48h488v112H270q-55 0-81.5-46.5t.5-92.5l47-80-123-293H19Z"
										/>
									</svg>
								</button>		
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

/*

<div className="mt-12">
	<div className="relative overflow-x-auto">
		<table className="w-full text-sm text-left text-black">
			<thead className="text-xs text-white uppercase bg-gray-900">
				<tr>
					<th scope="col" className="px-6 py-3">Customer</th>
					<th scope="col" className="px-6 py-3">Product</th>
					<th scope="col" className="px-6 py-3">Quantity</th>
					<th scope="col" className="px-6 py-3">Cost</th>
					<th scope="col" className="px-6 py-3"></th>
				</tr>
			</thead>
			<tbody>
				<tr className="bg-white border-b py-1">
					<td className="px-6 py-4">{customer}</td>
					<td className="px-6 py-4">{product}</td>
					<td className="px-6 py-4">
						<button onClick={ () => setQuantity(quantity + 1) } className="mx-3">
							[+]
						</button>
							{quantity}
						<button onClick={ () => setQuantity(quantity - 1) } className="mx-3">
							[-]
						</button>
					</td>
					<td className="px-6 py-4">{cost * quantity}</td>
					<td className="px-6 py-4">
						<button onClick={checkout} className="rounded-md bg-neutral-50 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-neutral-300">
							<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
								<path
									d="m482 447-80-80 53-52H317V203h138l-52-52 79-80 187 188-187 188ZM258.628 983q-32.328
									0-54.978-22.876t-22.65-55Q181 873 203.876 850.5t55-22.5Q291 828 313.5 850.728t22.5 54.644q0 
									32.328-22.728 54.978T258.628 983Zm440.5 0Q667 983 644.5 960.124t-22.5-55Q622 873 644.728 
									850.5t54.644-22.5Q732 828 754 850.728t22 54.644q0 32.328-22.372 54.978-22.371 22.65-54.5 
									22.65ZM19 277V165h166l151 351h298.505L743 262h126L731 574q-12 24-33.898 39.5Q675.203 629 647 
									629H332l-29 48h488v112H270q-55 0-81.5-46.5t.5-92.5l47-80-123-293H19Z"
								/>
							</svg>
						</button>		
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

*/