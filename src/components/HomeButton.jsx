import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeButton.module.scss';

function HomeButton({ to, children }) {
  return (
    <Link className={styles.HomeButton} to={to}>
      {children}
    </Link>
  );
}

export default HomeButton;
