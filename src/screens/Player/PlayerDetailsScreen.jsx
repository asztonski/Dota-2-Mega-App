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
    const playerHeroes = await playerAPI.getPlayerHeroes(playerId);

    // Combine all the fetched data into one all-encomposes object!
    setPlayer((prevPlayer) => ({
      ...basePlayer,
      totals: { ...playerTotalsTransformed },
      ...playerWinLoss,
      recentMatches: [...playerMatches],
      heroes: [...playerHeroes],
    }));
  };

  useEffect(() => {
    fetchPlayerStats();
    console.log("Player", player);
  }, [playerId]);

  if (!player) return "Loading Player Details";

  const renderedHeroes = (
    <div className={styles.PlayerMatches}>
      <div className={styles.Header}>Most Played Heroes</div>
      <div className={styles.MatchList}>
        {player.heroes.slice(0, 10).map((hero) => {
          return (
            // TODO: Hero (name, last played), Matches, Win %, KDA
            // hero_id, last_played, games, win, with_games, with_win, against_games, against_win
            <div key={hero["match_id"]} className={styles.PlayerMatch}>
              <div>
                Hero: {hero["hero_id"]}{" "}
                <span>Last Played: {hero["last_played"]}</span>
              </div>
              <div>Matches: ??</div>
              <div>Win %: {hero.win}</div>
              <div>KDA: ??/??/??</div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderedMatches = (
    <div className={styles.PlayerMatches}>
      <div className={styles.Header}>Latest Matches</div>
      <div className={styles.MatchList}>
        {player.recentMatches.map((match) => {
          return (
            // TODO: Hero, Result, Type, Duration, KDA
            <div key={match["match_id"]} className={styles.PlayerMatch}>
              <div>Hero: {match["hero_id"]}</div>
              {/* TODO: match["radiant_win"] shows if Radiant won the match...but how do we see if playe was on Radiant team? */}
              <div>Result: {match["radiant_win"]}</div>
              <div>Mode: {match["game_mode"]}</div>
              <div>Duration: {(match.duration / 60).toFixed(2)}</div>
              <div>
                KDA: {match.kills}/{match.deaths}/{match.assists}
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
        <div className={styles.OverviewProfile}>
          <div className={styles.ProfileImageContainer}>
            <img
              className={styles.ProfileImage}
              src={player.profile.avatarfull}
              alt={`Avatar for ${player.profile.personaname}`}
            />
          </div>
          <div className={styles.ProfileContainer}>
            <div className={styles.PlayerName}>
              {player.profile.personaname}
            </div>
            <div className={styles.ProfileHeader}>Overview</div>
            <div>
              <a href={player.profile.profileurl}>Steam</a>
            </div>
          </div>
        </div>

        <div className={styles.OverviewWinLoss}>
          <div className={styles.WinLossContainer}>
            <span className={styles.PlayerWins}>{player.win}</span>-
            <span className={styles.PlayerLosses}>{player.lose}</span>
            <div className={styles.WinLossHeader}>Record</div>
          </div>
        </div>

        <div className={styles.OverviewWinrate}>
          <div className={styles.WinrateContainer}>
            <div className={styles.Winrate}>
              {(player.win / (player.win + player.lose)).toFixed(2)}%
            </div>
            <div className={styles.WinrateHeader}>Winrate</div>
          </div>
        </div>

        <div className={styles.OverviewRanking}>
          <div className={styles.RankingContainer}>
            <div>~{player["mmr_estimate"].estimate}</div>
            <div className={styles.RankingHeader}>MMR</div>
          </div>
        </div>
      </div>

      <div className={styles.PlayerTotals}>
        <div className={styles.Header}>Player Totals</div>
        <div className={styles.TotalsContainer}>
          <div>Kills: {player.totals.kills}</div>
          <div>Deaths: {player.totals.deaths}</div>
          <div>Assists: {player.totals.assists}</div>
        </div>
      </div>

      {renderedHeroes}

      {renderedMatches}
    </div>
  );
}

export default PlayerDetailsScreen;
