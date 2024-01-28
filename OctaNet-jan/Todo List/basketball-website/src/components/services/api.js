const API_URL = 'https://api.example.com';

export const fetchPlayerData = async () => {
  try {
    const response = await fetch(`${API_URL}/players`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching player data:', error);
    throw error;
  }
};