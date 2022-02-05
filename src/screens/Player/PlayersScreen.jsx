import React, { useEffect, useState } from 'react';
import * as playerAPI from '../../apis/playerAPI';
import { useNavigate } from 'react-router-dom';
import styles from './PlayersScreen.module.scss';

function PlayersScreen() {
  const [playerSearchValue, setPlayerSearchValue] = useState('159842854');
  const [players, setPlayers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlayersByRank = async (playerName) => {
      const fetchedPlayersByRank = await playerAPI.getPlayersByRank();
      setPlayers(fetchedPlayersByRank);

      console.log(fetchedPlayersByRank);
    };

    fetchPlayersByRank();
  }, []);

  const renderedPlayersList = !players
    ? null
    : players.map((player) => {
        return (
          <div
            className={styles.PlayerItem}
            onClick={(event) => {
              navigate(`/players/${player['account_id']}`);
            }}
          >
            <div>Account ID: {player['account_id']}</div>
            <div>Rating: {player.rating}</div>
            <div>FH Unavailable?: {String(player['fh_unavailable'])}</div>
          </div>
        );
      });

  return (
    <div className={styles.PlayersScreen}>
      <h1 className={styles.Title}>Top 100 Players</h1>
      <form
        className={styles.Form}
        onSubmit={(event) => {
          event.preventDefault();
          navigate(`/players/${playerSearchValue}`);
        }}
      >
        <label>
          Player ID
          <input
            type='text'
            value={playerSearchValue}
            onChange={(event) => setPlayerSearchValue(event.target.value)}
            placeholder='Enter Player ID'
          />
        </label>
        <button
          type='button'
          onClick={(event) => {
            event.preventDefault();
            navigate(`/players/${playerSearchValue}`);
          }}
        >
          Search Player
        </button>
      </form>
      <div className={styles.PlayersList}>{renderedPlayersList}</div>
    </div>
  );
}

export default PlayersScreen;
