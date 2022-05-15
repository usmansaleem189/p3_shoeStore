import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1>Welcome to official Website of Men's Shoes</h1>
      <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae deleniti dignissimos perspiciatis quibusdam autem qui animi veniam, itaque dolores culpa consequuntur. Quidem distinctio incidunt sequi laboriosam nemo provident explicabo illo!
      </p>
      <Link to='products'>
        <button>Shop Now</button>
      </Link>

    </div>
  
    )
}
