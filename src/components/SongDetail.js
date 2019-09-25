import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ myFavoriteSong }) => {
  console.log(myFavoriteSong)
  if (myFavoriteSong) {
    return (
      <div>
        <h1>Detalhes para:</h1>
        <p>
          Título: {myFavoriteSong.title}
          <br />
          Duração: {myFavoriteSong.duration}
        </p>
      </div>
    )
  }
  return <div>Escolha uma música!</div>
}

const mapStateToProps = state => {
  return { myFavoriteSong: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)
