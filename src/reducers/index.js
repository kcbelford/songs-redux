import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Levitating', artist: 'Dua Lipa', duration: '3:23' },
    { title: 'In A Good Way', artist: 'Faye Webster', duration: '3:44' },
    { title: 'Be Sweet', artist: 'Japanese Breakfast', duration: '3:15' },
    { title: 'Body Temp Spirits', artist: 'Weeknites', duration: '3:20' }
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});