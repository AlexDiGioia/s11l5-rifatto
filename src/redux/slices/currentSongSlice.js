import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSong: null,
  likedSongs: [],
};

const currentSongSlice = createSlice({
  name: "currentSong",
  initialState,
  reducers: {
    setCurrentSong(state, action) {
      state.currentSong = action.payload;
    },
    toggleLike(state, action) {
      const { songId } = action.payload;
      const index = state.likedSongs.findIndex((id) => id === songId);
      if (index === -1) {
        state.likedSongs.push(songId);
      } else {
        state.likedSongs.splice(index, 1);
      }
    },
  },
});

export const { setCurrentSong, toggleLike } = currentSongSlice.actions;

export const selectCurrentSong = (state) => state.currentSong.currentSong;
export const selectLikedSongs = (state) => state.currentSong.likedSongs;

export default currentSongSlice.reducer;
