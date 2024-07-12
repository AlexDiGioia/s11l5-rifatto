import { SET_CURRENT_SONG } from "./actions";

const initialState = {
  currentSong: null,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
