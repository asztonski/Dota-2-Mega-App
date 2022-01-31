import React, { useEffect, useState } from 'react';
import { getPlayer, getPlayersByRank } from '../apis/dota';
import styles from './StatScreen.module.css';

function StatScreen() {
  const [player, setPlayer] = useState('');
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayer = async (playerName) => {
      const fetchedPlayer = await getPlayer(playerName);
      setPlayer(fetchedPlayer);

      console.log(fetchedPlayer);
    };

    const fetchPlayersByRank = async (playerName) => {
      const fetchedPlayersByRank = await getPlayersByRank();
      setPlayers(fetchedPlayersByRank);

      console.log(fetchedPlayersByRank);
    };

    // fetchPlayer('asztonek');
    fetchPlayersByRank();
  }, []);

  const renderedPlayersList = !players
    ? null
    : players.map((player) => {
        return (
          <div className={styles.PlayerItem}>
            <div>Account ID: {player['account_id']}</div>
            <div>Rating: {player.rating}</div>
            <div>FH Unavailable?: {String(player['fh_unavailable'])}</div>
          </div>
        );
      });

  return (
    <div className={styles.PlayersScreen}>
      <h1 className={styles.Title}>Players By Rank</h1>
      <div className={styles.PlayersList}>{renderedPlayersList}</div>
    </div>
  );
}

export default StatScreen;
