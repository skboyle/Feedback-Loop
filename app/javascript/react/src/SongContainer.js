import React from 'react';
import SongTile from './SongTile'


const SongContainer = props => {
  let songs = props.songs.reverse().map(song => {
    return(
      <div className="small-6 large-3 columns">
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
      <div className="row">
        {songs}
      </div>
    </div>
  );
}


export default SongContainer
