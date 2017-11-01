import React from 'react';
import SongTile from './SongTile'

const SongContainer = props => {
  let songs = props.songs.map(song => {
    return(
        <SongTile
          key={song.id}
          song={song}
          currentUser={props.currentUser}
        />
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
