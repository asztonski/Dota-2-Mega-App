import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as playerAPI from '../../apis/playerAPI';

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

  return (
    <div>
      <div>Account ID: {playerId}</div>
      <div>MMR Estimate: {player['mmr_estimate'].estimate}</div>
      <img src={player.profile.avatar} alt={`Avatar for ${player.profile.personaname}`} />
      <div>Player Name: {player.profile.personaname}</div>
      <div>Profile URL: {player.profile.profileurl}</div>
    </div>
  );
}

export default PlayerDetailsScreen;
