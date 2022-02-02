import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as playerAPI from "../../apis/playerAPI";
import styles from "./PlayerDetailsScreen.module.css";

// A Screen to show an individual Player's details
// This will be found at the route: /players/:playerId
function PlayerDetailsScreen(props) {
  const { playerId } = useParams();

  const [player, setPlayer] = useState();

  const fetchPlayerStats = async () => {
    // TODO: Run these 4 (and counting) API calls at once, rather than waiting for one to finish before moving onto the next
    const basePlayer = await playerAPI.getPlayer(playerId);
    const playerTotals = await playerAPI.getPlayerTotals(playerId);
    // The above is an oddly-shaped object, so we need to transform it
    const playerTotalsTransformed = {};

    for (let i = 0; i < playerTotals.length; i++) {
      playerTotalsTransformed[playerTotals[i].field] = playerTotals[i].sum;
    }

    const playerWinLoss = await playerAPI.getPlayerWinLoss(playerId);

    const playerMatches = await playerAPI.getPlayerRecentMatches(playerId);

    // Combine all the fetched data into one all-encomposes object!
    setPlayer((prevPlayer) => ({
      ...basePlayer,
      totals: { ...playerTotalsTransformed },
      ...playerWinLoss,
      recentMatches: [...playerMatches],
    }));
  };

  useEffect(() => {
    fetchPlayerStats();
    console.log("Player", player);
  }, [playerId]);

  if (!player) return "Loading Player Details";

  const renderedMatches = (
    <div className={styles.PlayerMatches}>
      <div className={styles.Header}>Recent Matches</div>
      <div className={styles.MatchList}>
        {player.recentMatches.map((match) => {
          return (
            <div key={match["match_id"]} className={styles.PlayerMatch}>
              <div>Duration: {match.duration}</div>
              <div>Mode: {match["game_mode"]}</div>
              <div>
                Kills/Deaths/Assists: {match.kills}/{match.deaths}/
                {match.assists}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

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
          <div>
            <a href={player.profile.profileurl}>Steam</a>
          </div>
          <div>MMR: ~{player["mmr_estimate"].estimate}</div>
        </div>
      </div>

      <div className={styles.PlayerTotals}>
        <div className={styles.Header}>Player Totals</div>
        <div>Kills: {player.totals.kills}</div>
        <div>Deaths: {player.totals.deaths}</div>
        <div>Assists: {player.totals.assists}</div>
      </div>
      <div className={styles.PlayerWinLoss}>
        <div className={styles.Header}>Player Win/Loss</div>
        <div>Win: {player.win}</div>
        <div>Loss: {player.lose}</div>
      </div>
      {renderedMatches}
    </div>
  );
}

export default PlayerDetailsScreen;
