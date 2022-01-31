import axios from 'axios';

const dotaAxios = axios.create({
  baseURL: 'https://api.opendota.com/api/',
});

export async function getPlayer(id) {
  try {
    const response = await dotaAxios.get(`playes/${id}`);
    return response.data;
  } catch (error) {
    console.log('Error fetching player: ', error);
  }
}

export async function getPlayersByRank() {
  try {
    const response = await dotaAxios.get(`playersByRank/`);
    return response.data;
  } catch (error) {
    console.log('Error fetching players by rank: ', error);
  }
}

/* Fetches an object containing information on every Hero 
Keys in returend obj: { id, name, localized_name, primary_attr, attack_type, roles[], legs */
export async function getHeroes() {
  try {
    const response = await dotaAxios.get(`heroes/`);
    return response.data;
  } catch (error) {
    console.log('Error fetching heroes: ', error);
  }
}

// TODO: Find out if there's even an API endpoint for Item data!
export async function getItems() {
  try {
    const response = await dotaAxios.get(`items/`); // Doesn't exist?!
    return response.data;
  } catch (error) {
    console.log('Error fetching items: ', error);
  }
}

export default dotaAxios;
