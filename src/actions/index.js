//Action creator

export const selectSong = song => {
  //Actions here...

  //return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}