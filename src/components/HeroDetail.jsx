import React from 'react';
import styles from './HeroDetail.module.css';
import LastUsed from './LastUsed';
import heroes from '../constants/heroes';
import StatBar from './StatBar';

function HeroDetail({ hero, bgColor }) {
  return (
    <div
      key={hero['match_id']}
      className={styles.HeroDetail}
      style={{ backgroundColor: bgColor }}
    >
      <div className={styles.Overview}>
        <div>{heroes[hero['hero_id']]}</div>
        <LastUsed date={hero['last_played']} />
      </div>
      <div className={styles.MatchesContainer}>
        <div>{hero.games}</div>
        <StatBar fillColor='red' />
      </div>
      <div className={styles.WinContainer}>
        <div>{((hero.win / hero.games) * 100).toFixed(2)}</div>
        <StatBar fillColor='green' />
      </div>
      <div className={styles.KDAContainer}>
        <div>??/??/??</div>
        <StatBar fillColor='orange' />
      </div>
      <div className={styles.RoleContainer}>
        <div>???</div>
        <StatBar fillColor='darkorange' />
      </div>
      <div className={styles.LaneContainer}>
        <div>???</div>
        <StatBar fillColor='purple' />
      </div>
    </div>
  );
}

export default HeroDetail;
