import React from 'react';
import PropTypes from 'prop-types';

import modes from '../../constants/modes';
import heroes from '../../constants/heroes';
import { isRadiant, timeHelper } from '../../helpers/helpers';
import StatBar from './../StatBar/StatBar';
import LastUsed from '../LastUsed';
import styles from './MatchDetail.module.scss';

const isPlayerWinner = (match) => {
  const isPlayerRadiant = isRadiant(match['player_slot']);
  const isRadiantWin = match['radiant_win'];

  if (isPlayerRadiant) {
    return isRadiantWin;
  }
  return !isRadiantWin;
};

function MatchDetail({ match, bgColor, highestDuration }) {
  if (!match) {
    return 'Loading Match Result...';
  }

  console.log('Match:', match);
  return (
    // TODO: Hero, Result, Type, Duration, KDA
    <div className={styles.MatchDetail} style={{ backgroundColor: bgColor }}>
      <div className={styles.Overview}>
        <div className={styles.HeroName}>{heroes[match.hero_id]}</div>
        <div>???</div>
      </div>
      <div className={styles.ResultContainer}>
        <div style={{ color: isPlayerWinner(match) ? '#a9cf54' : '#ea030e' }}>
          {isPlayerWinner(match) ? 'Won Match' : 'Lost Match'}
        </div>
        {/* <LastUsed date={match['start_time']} /> */}
      </div>
      <div className={styles.TypeContainer}>
        <div>???</div>
        <div>{modes[match.game_mode]}</div>
      </div>
      <div className={styles.DurationContainer}>
        <div>{timeHelper(match.duration)}</div>
        <StatBar
          fillColor='white'
          percentFilled={(match.duration / highestDuration) * 100}
        />
      </div>
      <div className={styles.KDAContainer}>
        <div>
          {match.kills}/{match.deaths}/{match.assists}
        </div>
        {/* TODO: Fill percentage */}
        <StatBar fillColor='#ea030e' percentFilled={(1 / 1) * 100} />
      </div>
    </div>
  );
}

MatchDetail.propTypes = {
  /** Match to be shown the details of */
  match: PropTypes.shape({
    assists: PropTypes.number,
    deaths: PropTypes.number,
    duration: PropTypes.number,
    game_mode: PropTypes.number,
    hero_id: PropTypes.number,
    kills: PropTypes.number,
  }), // TODO: Define the exact shape of the Match object

  /** The color the background should be rendered in  */
  bgColor: PropTypes.string,

  /** The longest Match the player has been in? Used to determine relative StatBar length */
  highestDuration: PropTypes.number,
};

export default MatchDetail;
