import React from 'react';
import styles from './MatchDetail.module.css';
import modes from '../constants/modes';
import heroes from '../constants/heroes';
import { timeHelper } from '../helpers/helpers';
import StatBar from '../components/StatBar';
import LastUsed from './LastUsed';
import { isRadiant } from '../helpers/helpers';

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

  return (
    // TODO: Hero, Result, Type, Duration, KDA
    <div
      key={match['match_id']}
      className={styles.MatchDetail}
      style={{ backgroundColor: bgColor }}
    >
      <div className={styles.Overview}>
        <div className={styles.HeroName}>{heroes[match['hero_id']]}</div>
        <div>???</div>
      </div>
      <div className={styles.ResultContainer}>
        <div style={{ color: isPlayerWinner(match) ? 'green' : 'red' }}>
          {isPlayerWinner(match) ? 'Won Match' : 'Lost Match'}
        </div>
        <LastUsed date={match['start_time']} />
      </div>
      <div className={styles.TypeContainer}>
        <div>???</div>
        <div>{modes[match['game_mode']]}</div>
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
        <StatBar fillColor='red' percentFilled={(1 / 1) * 100} />
      </div>
    </div>
  );
}

export default MatchDetail;
