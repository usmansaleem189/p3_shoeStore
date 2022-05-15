import React, { useContext } from 'react';
import shoes from '../../products.json';
import { Link } from 'react-router-dom';
import styles from './ProductsList.module.css';
import { GlobalContext } from '../../Context/GlobalState';

export const ProductsList = () => {
  //console.log(shoes);
  //console.log(Object.entries(shoes))

  const {cart,addToCart,increaseItem} = useContext(GlobalContext);

  function addProduct(slug, product) {
    const modifiedProduct = {...product};
    modifiedProduct.id = slug;
    modifiedProduct.quantity = 1;
    if (cart.find(item => item.id === slug))
      increaseItem(slug);
    else
      addToCart(modifiedProduct);
  }


  return (
    <div className={styles.container}>
      {Object.entries(shoes).map(([id,{name,img,cost}],i)=> {
        return (
        <div key={i}>
          <Link to={`/products/${id}`} className={styles.linkContainer}>
            <h3>{name}</h3>
            <img src={img} alt={name}  />
            <h3>${cost}</h3> 
          </Link>
          <button onClick={()=> addProduct(id, {name,img,cost})}>Add to Cart</button>
        </div>
        )
      }

      )}
    </div>
  )
}
