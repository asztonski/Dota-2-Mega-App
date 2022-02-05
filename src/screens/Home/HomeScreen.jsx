import React from 'react';
import HomeButton from '../../components/HomeButton';
import styles from './HomeScreen.module.scss';

// Ok So basically its a start view that has 4 buttons every button have 25% of window width and 25% of window height
function HomeScreen() {
  return (
    <div className={styles.HomeScreen}>
      {/* <h1 className={styles.Title}>DOTA 2 Mega App</h1> */}
      <div className={styles.ButtonContainer}>
        <HomeButton to='/players' className={styles.Button}>
          Players
        </HomeButton>
        <HomeButton to='/heroes' className={styles.Button}>
          Heroes
        </HomeButton>
        <HomeButton to='/items' className={styles.Button}>
          Items
        </HomeButton>
        <HomeButton to='/esports' className={styles.Button}>
          eSports
        </HomeButton>
      </div>
    </div>
  );
}

export default HomeScreen;
