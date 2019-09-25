import { combineReducers } from 'redux'

// Reducers
const songsReducer = () => {
  return [
    { title: 'Extra extra!', duration: '4:04' },
    { title: 'A sanguesunga', duration: '3:54' },
    { title: 'Há rio', duration: '5:37' },
    { title: 'Apocalipse now!', duration: '6:29' }
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}

// now, lets combine
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
