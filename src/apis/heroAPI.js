import dotaAxios from './dotaAxios';

// This file houses all Open DOTA API calls related to a Hero

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
