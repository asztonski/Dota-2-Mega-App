import React from 'react';
import PropTypes from 'prop-types';

import LastUsed from '../LastUsed';
import heroes from '../../constants/heroes';
import StatBar from '../StatBar/StatBar';
import styles from './HeroDetail.module.scss';

function HeroDetail({
  hero,
  bgColor,
  highestMatchCount,
  highestWinPercent,
  highestKDA,
}) {
  console.log('Highest Win Percent', highestWinPercent);

  return (
    <div
      key={hero.match_id}
      className={styles.HeroDetail}
      style={{ backgroundColor: bgColor }}
    >
      <div className={styles.Overview}>
        <div className={styles.HeroName}>{heroes[hero.hero_id]}</div>
        {/* <LastUsed date={hero['last_played']} /> */}
      </div>
      <div className={styles.MatchesContainer}>
        <div>{hero.games}</div>
        <StatBar
          fillColor='#ea030e'
          percentFilled={(hero.games / highestMatchCount) * 100}
        />
      </div>
      <div className={styles.WinContainer}>
        <div>{((hero.win / hero.games) * 100).toFixed(2)}%</div>
        <StatBar
          fillColor='#a9cf54'
          percentFilled={(hero.win / hero.games / highestWinPercent) * 100}
        />
      </div>
      <div className={styles.KDAContainer}>
        <div>??/??/??</div>
        {/* TODO: Calculate percentFilled */}
        <StatBar fillColor='#f26522' percentFilled={100} />
      </div>
      <div className={styles.RoleContainer}>
        <div>???</div>
        {/* TODO: Calculate percentFilled */}
        <StatBar fillColor='#ff6666' percentFilled={100} />
      </div>
      <div className={styles.LaneContainer}>
        <div>???</div>
        {/* TODO: Calculate percentFilled */}
        <StatBar fillColor='#66b5ab' percentFilled={100} />
      </div>
    </div>
  );
}

HeroDetail.propTypes = {
  /** Hero to be shown the details of */
  hero: PropTypes.shape({
    games: PropTypes.number,
    hero_id: PropTypes.string,
    win: PropTypes.number,
  }),

  /** The color the background should be rendered in */
  bgColor: PropTypes.string,

  /** The highest number of Matches any of this Player's Heroes have been in? Used to determine relative StatBar length */
  highestMatchCount: PropTypes.number,

  /** The highest win percent any of this Player's Heroes have achieved? Used to determine relative StatBar length */
  highestWinPercent: PropTypes.number,

  /** The highest KDA any of this Player's Heroes have achieved? Used to determine relative StatBar length */
  highestKDA: PropTypes.number,
};

export default HeroDetail;
