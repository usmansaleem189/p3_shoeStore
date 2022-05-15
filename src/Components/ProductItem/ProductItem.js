import React, { useContext } from 'react';
import { useParams } from 'react-router';
import shoes from '../../products.json';
import styles from '../ProductItem/ProductItem.module.css';
import { GlobalContext } from '../../Context/GlobalState';

export const ProductItem = () => {

  const {cart, addToCart, increaseItem} = useContext(GlobalContext);

  const {slug} = useParams();
  //console.log(slug);
  //console.log(shoes[slug]);

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
    <div className={styles.itemContainer}>
      <h3>{shoes[slug].name}</h3>
      <img src={shoes[slug].img} alt={shoes[slug].name} />
      <h3>${shoes[slug].cost}</h3>
      <button onClick={()=> addProduct(slug, shoes[slug])}>Add to Cart</button>
    </div>
  )
}
