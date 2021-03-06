import React from 'react';
import SongTile from './SongTile'


const SongContainer = props => {
  let songs = props.songs.reverse().map(song => {
    return(
      <div className="columns">
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
      <div className="row small-up-2 medium-up-3 large-up-4">
        {songs}
      </div>
    </div>
  );
}


export default SongContainer
