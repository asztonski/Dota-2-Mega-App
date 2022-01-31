import dotaAxios from './dotaAxios';

// This file houses all Open DOTA API calls related to an Item

// TODO: Find out if there's even an API endpoint for Item data!
export async function getItems() {
  try {
    const response = await dotaAxios.get(`items/`); // Doesn't exist?!
    return response.data;
  } catch (error) {
    console.log('Error fetching items: ', error);
  }
}
