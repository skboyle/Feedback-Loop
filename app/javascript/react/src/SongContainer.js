import React from 'react';
import SongTile from './SongTile'
import Grid from 'react-css-grid'

const SongContainer = props => {
  let songs = props.songs.map(song => {
    return(
      <div className="row">
        <SongTile
          key={song.id}
          song={song}
          currentUser={props.currentUser}
        />
      </div>
    )
  })
  return(
    <div className="song-container">
      <h2>New Songs (Song Container)</h2>
      <ul>
        {songs}
      </ul>
    </div>
  );
}

export default SongContainer
