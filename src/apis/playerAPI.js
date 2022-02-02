import dotaAxios from './dotaAxios';

// This file houses all Open DOTA API calls related to a Player

/* Fetch rather useless info, including mmr_estimate.estimate, rank_tier, 
and profile { account_id, personaname, avatar, profileurl, and loccountrycode} */
export async function getPlayer(id) {
  try {
    const response = await dotaAxios.get(`players/${id}`);
    return response.data;
  } catch (error) {
    console.log('Error fetching player: ', error);
  }
}

/* Fetches "win" and "lose" integers for the Player 
Accepts many queries: limit, offeset, win, patch, game_mode, lobby_type, region, date, lane_role, hero_id, is_radiant, included_account_id, excluded_account_id, with_hero_id, against_hero_id, significant, having, sort
TODO: Add ability to add queries
*/
export async function getPlayerWinLoss(id) {
  try {
    const response = await dotaAxios.get(`players/${id}/wl`);
    return response.data;
  } catch (error) {
    console.log("Error fetching player's win/loss: ", error);
  }
}

/* Fetches last 20 matches as objects containing 25 keys, such as: 
match_id, player_slot, radiant_win, duration, game_mode, lobby_type, hero_id, start_time, kills, deaths, assists, xp_per_min, gold_per_min, hero_damage, tower_damage, hero_healing, last_hits, cluster, leaver_status, party_size */
export async function getPlayerRecentMatches(id) {
  try {
    const response = await dotaAxios.get(`players/${id}/recentMatches`);
    return response.data;
  } catch (error) {
    console.log("Error fetching player's recent matches: ", error);
  }
}

/* Fetches an array (length 122, at this time) of hero objects, each with the following keys:
hero_id, last_played, games, win, with_games, with_win, against_games, against_win */
export async function getPlayerHeroes(id) {
  try {
    const response = await dotaAxios.get(`players/${id}/heroes`);
    return response.data;
  } catch (error) {
    console.log("Error fetching player's heroes: ", error);
  }
}

/* Fetches an array of peers (I guess friends the player has played with?). Each object in the array includes:
account_id, last_played, win, games, with_win, with_games, against_win, against_games, with_gpm_sum, with_xpm_sum, personaname, avatar */
export async function getPlayerPeers(id) {
  try {
    const response = await dotaAxios.get(`players/${id}/peers`);
    return response.data;
  } catch (error) {
    console.log("Error fetching player's peers: ", error);
  }
}

/* Appears to fetch "Totals" for various life-time statistics of the player. 
It is an array of similar-shaped objects, each having a field, n, and sum property. 
Example: [ { field: "kills", "n": 1512, "sum": 11890 } ]. What is "n"?? 
Some field values: kills, deaths, assists, kda, gold_per_min, xp_per_min, lane_efficiency_pct, duration, level, hero_damage, tower_damage, hero_healing, stuns, tower_kills, neutral_kills, courier_kills, purchase_tpscroll, purchase_ward_observer, purchase_rapier, pings, throw, comeback, stomp, loss, actions_per_min */
export async function getPlayerTotals(id) {
  try {
    const response = await dotaAxios.get(`players/${id}/totals`);
    return response.data;
  } catch (error) {
    console.log("Error fetching player's totals: ", error);
  }
}

/* Fetches an array of objects with the following properties: 
hero_id, score, percent_rank, card */
export async function getPlayerRankings(id) {
  try {
    const response = await dotaAxios.get(`players/${id}/rankings`);
    return response.data;
  } catch (error) {
    console.log("Error fetching player's rankings: ", error);
  }
}

/* Fetches an array of 100 objects with properties for: account_id, rating, and fh_unavailable (what is that??) */
export async function getPlayersByRank() {
  try {
    const response = await dotaAxios.get(`playersByRank/`);
    return response.data;
  } catch (error) {
    console.log('Error fetching players by rank: ', error);
  }
}
