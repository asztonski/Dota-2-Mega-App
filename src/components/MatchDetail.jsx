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

function MatchDetail({ match, bgColor }) {
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
        <div>{heroes[match['hero_id']]}</div>
        <div>???</div>
      </div>
      <div className={styles.ResultContainer}>
        <div style={{ color: isPlayerWinner(match) ? 'green' : 'red' }}>
          Result: {isPlayerWinner(match) ? 'Won Match' : 'Lost Match'}
        </div>
        <LastUsed date={Date.now()} />
      </div>
      <div className={styles.TypeContainer}>
        <div>???</div>
        <div>{modes[match['game_mode']]}</div>
      </div>
      <div className={styles.DurationContainer}>
        <div>{timeHelper(match.duration)}</div>
        <StatBar fillColor='white' />
      </div>
      <div className={styles.KDAContainer}>
        <div>
          {match.kills}/{match.deaths}/{match.assists}
        </div>
        <StatBar fillColor='red' />
      </div>
    </div>
  );
}

export default MatchDetail;
