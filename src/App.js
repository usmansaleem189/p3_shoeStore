import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import {Home} from './Components/Home/Home';
import {Products} from './Components/Products/Products';
import {ProductsList} from './Components/ProductsList/ProductsList';
import {ProductItem} from './Components/ProductItem/ProductItem';
import {Cart} from './Components/Cart/Cart';
import {Checkout} from './Components/Checkout/Checkout';
import {Error} from './Components/Error/Error';
import { GlobalContext} from './Context/GlobalState';


function App()  {

  const {cart} = useContext(GlobalContext);

  function cartCount() {
    let total = 0;
    cart.forEach((product => total += product.quantity));
    return total;
  }

  return (
    <Router>
      <nav className='navBar'>
        <Link to = '/'> <h2>Home</h2> </Link>
        <Link to = '/products'> <h2>Products</h2> </Link>
        <Link to = '/cart'> <h2>Cart <sup className={cartCount() ? 'cartCount': 'noDisplay'}>{cartCount()}</sup></h2> </Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>}>
          <Route path='' element={<ProductsList/>}/>
          <Route path=':slug' element={<ProductItem/>} />
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </Router>
  )
}

export default App;
