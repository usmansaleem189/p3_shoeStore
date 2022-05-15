import React from 'react';
import styles from './Products.module.css';
import { Outlet } from 'react-router';

export const Products = () => {
  return (
    <div className={styles.container}>
      <h1>Shoes Store</h1>
      <Outlet />
    </div>
  )
}
