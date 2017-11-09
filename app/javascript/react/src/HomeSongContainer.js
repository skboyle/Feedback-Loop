import React from 'react';
import SongTile from './SongTile'


const HomeSongContainer = props => {
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
    <div className="home-song-container">
      <div className="row small-up-2 medium-up-2 large-up-3">
        {songs}
      </div>
    </div>
  );
}


export default HomeSongContainer
