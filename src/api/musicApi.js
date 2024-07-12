const API_BASE_URL = "https://striveschool-api.herokuapp.com/api/deezer";

export const fetchSongs = async (searchTerm) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/search?q=${encodeURIComponent(searchTerm)}`
    );
    if (!response.ok) {
      throw new Error("Errore nella response");
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Errore nella fetch delle canzoni:", error);
    throw error;
  }
};
