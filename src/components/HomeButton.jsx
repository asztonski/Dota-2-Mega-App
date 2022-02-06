import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../screens/Home/HomeScreen.module.css';

function HomeButton({ to, children }) {
  return (
    <Link className={styles.HomeButton} to={to}>
      {children}
    </Link>
  );
}

export default HomeButton;
