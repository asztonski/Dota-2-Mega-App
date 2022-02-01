import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as playerAPI from '../../apis/playerAPI';
import styles from './PlayerDetailsScreen.module.css';

// A Screen to show an individual Player's details
// This will be found at the route: /players/:playerId
function PlayerDetailsScreen(props) {
  const { playerId } = useParams();

  const [player, setPlayer] = useState();

  useEffect(() => {
    playerAPI.getPlayer(playerId).then((value) => {
      setPlayer(value);
      console.log(value);
    });
  }, [playerId]);

  if (!player) return 'Loading Player Details';

  // TODO: "Overview" section (or even component?): Renders: Render win-loss numbers, winrate %, last match (hours ago), Rank (as an icon?)
  // TODO: "Most Played Heroes (All Time)": Renders top 10 heroes by # of matches. Shows hero name, last time ago on that hero, Win %, KDA, Role, Lane
  // TODO: "Latest Matches": Renders last 10 matches. Shows hero played, skill level, result (win/lose), Type, Duration, and KDA
  return (
    <div className={styles.PlayerDetails}>
      <div className={styles.PlayerOverview}>
        <div className={styles.PlayerHeader}>
          <img
            className={styles.ProfileImage}
            src={player.profile.avatarfull}
            alt={`Avatar for ${player.profile.personaname}`}
          />
          <div className={styles.PlayerName}>{player.profile.personaname}</div>
        </div>
        <div>MMR: ~{player['mmr_estimate'].estimate}</div>
        <div>
          <a href={player.profile.profileurl}>Steam</a>
        </div>
      </div>
    </div>
  );
}

export default PlayerDetailsScreen;
