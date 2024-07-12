import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import musicReducer from "./slices/musicSlice";
import playerReducer from "./slices/playerSlice";
import likedSongsReducer from "./slices/likedSongsSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    music: musicReducer,
    player: playerReducer,
    likedSongs: likedSongsReducer,
  },
});

export default store;
