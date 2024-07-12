import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedSongs: [],
};

const likedSongsSlice = createSlice({
  name: "likedSongs",
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const songId = action.payload;
      const index = state.likedSongs.indexOf(songId);
      if (index === -1) {
        state.likedSongs.push(songId);
      } else {
        state.likedSongs.splice(index, 1);
      }
    },
  },
});

export const { toggleLike } = likedSongsSlice.actions;

export const selectLikedSongs = (state) => state.likedSongs.likedSongs;

export default likedSongsSlice.reducer;
