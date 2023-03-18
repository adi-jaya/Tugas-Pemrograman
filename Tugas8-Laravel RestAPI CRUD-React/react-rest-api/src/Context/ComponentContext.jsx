import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

const ComponentContext = createContext();

const initialFormSkill = { name: '', slug: '' };
const initialFormProduct = { title: '', category: '', brand: '', price: '', rating: '', stock: '' };
const initialFormCustomer = { name: '', address: '', email: '', phoneNumber: '' };

export const ComponentProvider = ({ children }) => {
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	// ========================================================================================== //
	// Skill 																																											//
	// ========================================================================================== //
	
	const [skillFormValues, setSkillFormValues] = useState(initialFormSkill);
	const [skills, setSkills] = useState([]);
	const [skill, setSkill] = useState([]);

	const onChangeSkill = (e) => {
		const { name, value } = e.target;
		setSkillFormValues({ ...skillFormValues, [name]: value });
	};

	const getSkills = async () => {
		const apiSkills = await axios.get('skills');
		setSkills(apiSkills.data.data);
		setSkillFormValues(initialFormSkill);
	};

	const getSkill = async (id) => {
		const response = await axios.get('skills/' + id);
		const apiSkill = response.data.data;
		setSkill(apiSkill);
		setSkillFormValues({
			name: apiSkill[0].name,
			slug: apiSkill[0].slug
		});
	};

	const storeSkill = async (event) => {
		event.preventDefault();
		try {
			await axios.post('skills', skillFormValues);
			getSkills();
			navigate('/skills');
		}
		catch (event) {
			if (event.response.status === 422) {
				setErrors(event.response.data.errors);
			}
		}
	};

	const updateSkill = async (event) => {
		event.preventDefault();
		await axios.put('skills/' + skill[0].idSkill, skillFormValues);
		getSkills();
		navigate('/skills');
	};

	const deleteSkill = async (id) => {
		if(!window.confirm('Are you sure')) {
			return;
		}
		await axios.delete('/skills/' + id);
		getSkills();
	};

	// ========================================================================================== //
	// Product 																																										//
	// ========================================================================================== //
	
	const [productFormValues, setProductFormValues] = useState(initialFormProduct);
	const [products, setProducts] = useState([]);
	const [product, setProduct] = useState([]);

	const onChangeProduct = (event) => {
		const { name, value } = event.target;
		setProductFormValues({...productFormValues, [name]: value});
	};

	const getProducts = async () => {
		const apiProducts = await axios.get('products');
		setProducts(apiProducts.data.data);
		setProductFormValues(initialFormProduct);
	};

	const getProduct = async (id) => {
		const response = await axios.get('products/' + id);
		const apiProduct = response.data.data;
		setProduct(apiProduct);
		setProductFormValues({
			title 	: apiProduct[0].title,
			category: apiProduct[0].category,
			brand 	: apiProduct[0].brand,
			price 	: apiProduct[0].price,
			rating 	: apiProduct[0].rating,
			stock 	: apiProduct[0].stock
		});
	};

	const storeProduct = async (event) => {
		event.preventDefault();
		try {
			await axios.post('products/', productFormValues);
			getProducts();
			navigate('/products');
		}
		catch (event){
			if (event.response.status === 422) {
				setErrors(event.response.data.errors);
			}
		}
	};

	const updateProduct = async(event) => {
		event.preventDefault();
		await axios.put('products/' + product[0].idProduct, productFormValues);
		getProducts();
		navigate('/products');
	};

	const deleteProduct = async (id) => {
		if(!window.confirm('Are you sure')) {
			return;
		}
		await axios.delete('products/' + id);
		getProducts();
	};

	// ========================================================================================== //
	// Customer																																										//
	// ========================================================================================== //
	
	const [customerFormValues, setCustomerFormValues] = useState(initialFormCustomer);
	const [customers, setCustomers] = useState([]);
	const [customer, setCustomer] = useState([]);

	const onChangeCustomer = (event) => {
		const { name, value } = event.target;
		setCustomerFormValues({ ...customerFormValues, [name]: value });
	};

	const getCustomers = async () => {
		const apiCustomers = await axios.get('customers');
		setCustomers(apiCustomers.data.data);
		setCustomerFormValues(initialFormCustomer);
	};

	const getCustomer = async (id) => {
		const response = await axios.get('customers/' + id);
		const apiCustomer = response.data.data;
		setCustomer(apiCustomer);
		
		setCustomerFormValues({
			name				: apiCustomer[0].name,
			address			: apiCustomer[0].address,
			email				: apiCustomer[0].email,
			phoneNumber	: apiCustomer[0].phoneNumber
		});
	};

	const storeCustomer = async (event) => {
		event.preventDefault();
		try {
			await axios.post('customers', customerFormValues);
			getCustomers();
			navigate('/customers');
		}
		catch (event) {
			if (event.response.status === 422) {
				setErrors(event.response.data.errors);
			}
		}
	};

	const updateCustomer = async (event) => {
		event.preventDefault();
		await axios.put('customers/' + customer[0].idCustomer, customerFormValues);
		getCustomers();
		navigate('/customers');
	};

	const deleteCustomer = async (id) => {
		if(!window.confirm('Are you sure')) {
			return;
		}
		await axios.delete('customers/' + id);
		getCustomers();
	};

	// ========================================================================================== //
	// cart																																												//
	// ========================================================================================== //
	
	const [carts, setCarts] = useState([]);
	const [productCart, setProductCart] = useState([]);
	const [customerCart, setCustomerCart] = useState([]);

	const getCarts = async () => {
		const apiCarts = await axios.get('carts');
		setCarts(apiCarts.data.data);
	};

	const addProductToCart = async (id) => {
		const response = await axios.get('products/' + id);
		const apiProduct = response.data.data;
		setProductCart(apiProduct);
		window.alert('Product added to cart');
	}

	const addCustomerToCart = async (id) => {
		const response = await axios.get('customers/' + id);
		const apiCustomer = response.data.data;
		setCustomerCart(apiCustomer);
		window.alert('This customer is selected as a buyer');
	}

	const deleteCart = async (id) => {
		if(!window.confirm('Are you sure')) {
			return;
		}
		await axios.delete('carts/' + id);
		getCarts();
	};

	return (
		<ComponentContext.Provider
			value={{
				// Global
				errors, setErrors, 
				
				// Skill
				skills, getSkills, skill, getSkill, storeSkill, updateSkill, deleteSkill, onChangeSkill, skillFormValues,

				// Product
				products, getProducts, product, getProduct, storeProduct, updateProduct, deleteProduct, onChangeProduct, productFormValues,

				// Customer
				customers, getCustomers, customer, getCustomer, storeCustomer, updateCustomer, deleteCustomer, onChangeCustomer, customerFormValues,

				// Cart
				carts, getCarts, productCart, addProductToCart, customerCart, addCustomerToCart, deleteCart,
			}}
		>
			{children}
		</ComponentContext.Provider>
	)
}

export default ComponentContext;