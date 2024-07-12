export const SET_CURRENT_SONG = "SET_CURRENT_SONG";

export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  payload: song,
});
