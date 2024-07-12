import { createSlice } from "@reduxjs/toolkit";
import { fetchSongs } from "../../api/musicApi";

const initialState = {
  songs: [],
  status: "idle",
  error: null,
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    setSongs: (state, action) => {
      state.songs = action.payload;
    },
    setLoading: (state) => {
      state.status = "loading";
    },
    setSuccess: (state) => {
      state.status = "success";
    },
    setError: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export const { setSongs, setLoading, setSuccess, setError } =
  musicSlice.actions;

export const selectSongs = (state) => state.music.songs;
export const selectMusicStatus = (state) => state.music.status;
export const selectMusicError = (state) => state.music.error;

export const fetchSongsAsync = (searchTerm) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const data = await fetchSongs(searchTerm); // Replace with actual API call
    dispatch(setSongs(data));
    dispatch(setSuccess());
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default musicSlice.reducer;
