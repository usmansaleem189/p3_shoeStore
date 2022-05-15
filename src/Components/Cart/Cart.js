import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalState';
import styles from '../Cart/Cart.module.css';

export const Cart = () => {

  const {cart, removeFromCart, increaseItem, decreaseItem, emptyCart} = useContext(GlobalContext);
 // console.log(cart);
  //console.log(cart.length);

  
  function decreaseProduct(quantity, ID) {
    if (quantity > 1)
      decreaseItem(ID);

  }

 function totalCost() {
   let total = 0;
   cart.forEach((product => total += product.cost*product.quantity));
   return total;
 }


  
  if (!cart.length)
    return (
      <h2 className={styles.cartContainer}>Shopping Cart is Empty</h2>
    )

  return (
    <div className={styles.cartContainer}>
      <h2>Shopping Cart</h2>
      <table className={styles.tableContainer}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => {
            return (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>
                <img src={product.img} alt={product.name} height={100} />
              </td>
              <td>{product.cost}</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={()=> increaseItem(product.id)}>+</button>
                <button onClick={()=> decreaseProduct(product.quantity, product.id)}>-</button>
                <button onClick={()=> removeFromCart(product.id)}>x</button>
              </td>
            </tr>
            )
          })}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan='4'>Total</td>
            <td>${totalCost()}</td>
          </tr>
        </tfoot>

      </table>

      <Link to='/checkout' >
          <button onClick={()=> emptyCart()} className={styles.checkoutButton}>Checkout</button>
      </Link>
    </div>
  )
}
