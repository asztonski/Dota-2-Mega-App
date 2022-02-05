import React from 'react';
import styles from './PlayerOverview.module.scss';

function PlayerOverview({ player }) {
  return (
    <div className={styles.PlayerOverview}>
      <div className={styles.OverviewProfile}>
        <div className={styles.ProfileImageContainer}>
          <img
            className={styles.ProfileImage}
            src={player.profile.avatarfull}
            alt={`Avatar for ${player.profile.personaname}`}
          />
        </div>
        <div className={styles.ProfileContainer}>
          <div className={styles.PlayerName}>{player.profile.personaname}</div>
          <div className={styles.ProfileHeader}>Overview</div>
          <div>
            <a href={player.profile.profileurl}>Steam</a>
          </div>
        </div>
      </div>

      <div className={styles.OverviewWinLoss}>
        <div className={styles.WinLossContainer}>
          <span className={styles.PlayerWins}>
            {player.win.toLocaleString()}
          </span>
          -
          <span className={styles.PlayerLosses}>
            {player.lose.toLocaleString()}
          </span>
          <div className={styles.WinLossHeader}>Record</div>
        </div>
      </div>

      <div className={styles.OverviewWinrate}>
        <div className={styles.WinrateContainer}>
          <div
            className={styles.Winrate}
            style={{
              color:
                player.win / (player.win + player.lose) > 0.5 ? 'green' : 'red',
            }}
          >
            {((player.win / (player.win + player.lose)) * 100).toFixed(2)}%
          </div>
          <div className={styles.WinrateHeader}>Winrate</div>
        </div>
      </div>

      <div className={styles.OverviewRanking}>
        <div className={styles.RankingContainer}>
          <div>{player['leaderboard_rank']}</div>
          <div className={styles.RankingHeader}>Rank #</div>
        </div>
      </div>
    </div>
  );
}

export default PlayerOverview;
