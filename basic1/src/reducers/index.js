import { combineReducers } from "redux";

const songsReducer = () => {
  return {
    songs: [
      { title: "rock", duration: "4:32" },
      { title: "metal", duration: "532" },
      { title: "jazz", duration: "2:32" },
    ],

    favoriteTitle: "jazz",
  };
};

const selectedSongReducer = (selectSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
