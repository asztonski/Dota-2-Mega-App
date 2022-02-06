import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import * as playerAPI from '../../apis/playerAPI';
import HeroDetail from '../../components/HeroDetail/HeroDetail';
import PlayerOverview from '../../components/PlayerOverview/PlayerOverview';
import MatchDetail from '../../components/MatchDetail/MatchDetail';
import styles from './PlayerDetailsScreen.module.scss';

TimeAgo.addDefaultLocale(en);

// A Screen to show an individual Player's details
// This will be found at the route: /players/:playerId
function PlayerDetailsScreen(props) {
  const { playerId } = useParams();

  const [player, setPlayer] = useState();

  const fetchPlayerStats = async function () {
    // Run these 5 API calls at once via Promise.all, rather than waiting for one to finish before moving onto the next
    const basePlayer = playerAPI.getPlayer(playerId);
    const playerTotals = playerAPI.getPlayerTotals(playerId);
    const playerWinLoss = playerAPI.getPlayerWinLoss(playerId);
    const playerMatches = playerAPI.getPlayerRecentMatches(playerId);
    const playerHeroes = playerAPI.getPlayerHeroes(playerId);

    Promise.all([
      basePlayer,
      playerTotals,
      playerWinLoss,
      playerMatches,
      playerHeroes,
    ]).then((values) => {
      // playerTotals is an oddly-shaped object, so we need to transform it
      const playerTotalsTransformed = {};

      for (let i = 0; i < values[1].length; i++) {
        playerTotalsTransformed[values[1][i].field] = values[1][i].sum;
      }

      const transformedPlayerObject = {
        ...values[0],
        totals: { ...playerTotalsTransformed },
        ...values[2],
        recentMatches: [...values[3]],
        heroes: [...values[4]],
      };

      setPlayer(transformedPlayerObject);
    });
  };

  useEffect(() => {
    fetchPlayerStats();
  }, [playerId]);

  if (!player || !player.heroes || !player.recentMatches)
    return <div className={styles.Loading}>Loading Player Details</div>;

  const highestDuration = (matches) => {
    let highest = 0;
    matches.forEach((match) => {
      if (match.duration > highest) highest = match.duration;
    });

    return highest;
  };

  const highestMatchCount = (heroes) => {
    let highest = 0;
    heroes.slice(0, 10).forEach((hero) => {
      if (hero.games > highest) highest = hero.games;
    });

    return highest;
  };

  const highestWinPercent = (heroes) => {
    let highest = 0;
    heroes.slice(0, 10).forEach((hero) => {
      if (hero.win / hero.games > highest) highest = hero.win / hero.games;
    });

    return highest;
  };

  const renderedHeroes = (
    <div className={styles.PlayerHeroes}>
      <div className={styles.Header}>Most Played Heroes</div>
      <div className={styles.HeroList}>
        <div className={styles.HeroesCategories}>
          <div>Hero</div>
          <div>Matches</div>
          <div>Win %</div>
          <div>KDA</div>
          <div>Role</div>
          <div>Lane</div>
        </div>
        {player.heroes.slice(0, 10).map((hero, index) => (
          <HeroDetail
            key={hero['hero_id']}
            hero={hero}
            bgColor={index % 2 === 0 ? '#2d3741' : '#353f49'}
            highestMatchCount={highestMatchCount(player.heroes)}
            highestWinPercent={highestWinPercent(player.heroes)}
          />
        ))}
      </div>
    </div>
  );

  const renderedMatches = (
    <div className={styles.PlayerMatches}>
      <div className={styles.Header}>Latest Matches</div>
      <div className={styles.MatchList}>
        <div className={styles.MatchCategories}>
          <div>Hero</div>
          <div>Result</div>
          <div>Type</div>
          <div>Duration</div>
          <div>KDA</div>
        </div>
        {player.recentMatches.slice(0, 10).map((match, index) => (
          <MatchDetail
            key={match['match_id']}
            match={match}
            bgColor={index % 2 === 0 ? '#2d3741' : '#353f49'}
            highestDuration={highestDuration(player.recentMatches)}
          />
        ))}
      </div>
    </div>
  );

  const renderedLifetime = (
    <div className={styles.PlayerLifetime}>
      <div className={styles.Header}>Lifetime Stats</div>
      <div className={styles.MatchList}>
        <div className={styles.MatchCategories}>
          <div>Overview</div>
          <div>Mataches</div>
          <div>Win Rate</div>
        </div>
        {player.recentMatches.slice(0, 10).map((match, index) => (
          <MatchDetail
            key={match['match_id']}
            match={match}
            bgColor={index % 2 === 0 ? '#2d3741' : '#353f49'}
            highestDuration={highestDuration(player.recentMatches)}
          />
        ))}
      </div>
    </div>
  );

  // TODO: "Overview" section (or even component?): Renders: Render win-loss numbers, winrate %, last match (hours ago), Rank (as an icon?)
  // TODO: "Most Played Heroes (All Time)": Renders top 10 heroes by # of matches. Shows hero name, last time ago on that hero, Win %, KDA, Role, Lane
  // TODO: "Latest Matches": Renders last 10 matches. Shows hero played, skill level, result (win/lose), Type, Duration, and KDA
  return (
    <div className={styles.PlayerDetails}>
      <PlayerOverview player={player} />
      {/* <div className={styles.PlayerTotals}>
        <div className={styles.Header}>Player Totals</div>
        <div className={styles.TotalsContainer}>
          <div>Kills: {player.totals.kills.toLocaleString()}</div>
          <div>Deaths: {player.totals.deaths.toLocaleString()}</div>
          <div>Assists: {player.totals.assists.toLocaleString()}</div>
        </div>
      </div> */}
      {renderedLifetime}
      {renderedHeroes}
      {renderedMatches}
    </div>
  );
}

export default PlayerDetailsScreen;
