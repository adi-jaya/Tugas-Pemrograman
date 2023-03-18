import { Routes, Route, Link } from 'react-router-dom';
import { ComponentProvider } from './Context/ComponentContext';

import { Home } from './components/Home';

// Skill Components
import { SkillIndex } from './components/skills/SkillIndex';
import { SkillCreate } from './components/skills/SkillCreate';
import { SkillEdit } from './components/skills/SkillEdit';

// Product Components
import { ProductIndex } from './components/products/ProductIndex';
import { ProductCreate } from './components/products/ProductCreate';
import { ProductEdit } from './components/products/ProductEdit';

// Customer Components
import { CustomerIndex } from './components/customers/CustomerIndex';
import { CustomerCreate } from './components/customers/CustomerCreate';
import { CustomerEdit } from './components/customers/CustomerEdit';

// Cart Components
import { CartIndex } from './components/carts/CartIndex';
import { CartCreate } from './components/carts/CartCreate';

function App() {
  return (
    <ComponentProvider>
      <div className="bg-gray-300">
      	<div className="max-w-full mx-auto min-h-screen">
      		{/* Navbar */}
          <nav className="bg-gray-900">
      			<ul className="flex">
      				{/* Home */}
              <li className="m-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
      					<Link to="/">Home</Link>
      				</li>

              {/* Skills */}
      				<li className="m-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
      					<Link to="/skills">Skills</Link>
      				</li>

              {/* Prouducts */}
              <li className="m-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                <Link to="/products">Products</Link>
              </li>

              {/* Customers */}
              <li className="m-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                <Link to="/customers">Customers</Link>
              </li>

              {/* Carts */}
              <li className="m-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                <Link to="/carts">History</Link>
              </li>

              {/* Carts */}
              <li className="m-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                <Link to="/carts/checkout">Cart</Link>
              </li>
      			</ul>
      		</nav>

          {/* Routing */}
      		<Routes>
      			<Route path="/" element={ <Home/> } />

            {/* Skill */}
      			<Route path="/skills" element={ <SkillIndex/> } />
      			<Route path="/skills/create" element={ <SkillCreate/> } />
      			<Route path="/skills/:id/edit" element={ <SkillEdit/> } />

            {/* Product */}
            <Route path="/products" element={ <ProductIndex/> } />
            <Route path="/products/create" element={ <ProductCreate/> } />
            <Route path="/products/:id/edit" element={ <ProductEdit/> } />

            {/* Customer */}
            <Route path="/customers" element={ <CustomerIndex/> } />
            <Route path="/customers/create" element={ <CustomerCreate/> } />
            <Route path="/customers/:id/edit" element={ <CustomerEdit/> } />

            {/* Cart */}
            <Route path="/carts" element={ <CartIndex/> } />
            <Route path="/carts/checkout" element={ <CartCreate/> } />
      		</Routes>
      	</div>
      </div>
    </ComponentProvider>
  );
}

export default App;
