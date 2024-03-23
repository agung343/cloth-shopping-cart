import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from "./components/Product.jsx"
import { DUMMY_PRODUCTS } from './dummy-products.js';

import CartShoppingProvider from './store/cart-context.jsx';

function App() {
  return (
    <CartShoppingProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartShoppingProvider>
  );
}

export default App;
