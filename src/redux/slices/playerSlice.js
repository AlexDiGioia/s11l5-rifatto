import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSong: null,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
  },
});

export const { setCurrentSong } = playerSlice.actions;

export const selectCurrentSong = (state) => state.player.currentSong;

export default playerSlice.reducer;
