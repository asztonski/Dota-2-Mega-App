import React from 'react';
import styles from './HeroDetail.module.css';
import LastUsed from './LastUsed';
import heroes from '../constants/heroes';
import StatBar from './StatBar';

function HeroDetail({
  hero,
  bgColor,
  highestMatchCount,
  highestWinPercent,
  highestKDA,
}) {
  return (
    <div
      key={hero['match_id']}
      className={styles.HeroDetail}
      style={{ backgroundColor: bgColor }}
    >
      <div className={styles.Overview}>
        <div className={styles.HeroName}>{heroes[hero['hero_id']]}</div>
        <LastUsed date={hero['last_played']} />
      </div>
      <div className={styles.MatchesContainer}>
        <div>{hero.games}</div>
        <StatBar
          fillColor='red'
          percentFilled={(hero.games / highestMatchCount) * 100}
        />
      </div>
      <div className={styles.WinContainer}>
        <div>{((hero.win / hero.games) * 100).toFixed(2)}%</div>
        <StatBar
          fillColor='green'
          percentFilled={(100 * (hero.win / hero.games)) / highestWinPercent}
        />
      </div>
      <div className={styles.KDAContainer}>
        <div>??/??/??</div>
        {/* TODO: Calculate percentFilled */}
        <StatBar fillColor='orange' percentFilled={100} />
      </div>
      <div className={styles.RoleContainer}>
        <div>???</div>
        {/* TODO: Calculate percentFilled */}
        <StatBar fillColor='darkorange' percentFilled={100} />
      </div>
      <div className={styles.LaneContainer}>
        <div>???</div>
        {/* TODO: Calculate percentFilled */}
        <StatBar fillColor='purple' percentFilled={100} />
      </div>
    </div>
  );
}

export default HeroDetail;
