import React from 'react';

const PlaylistTile = props => {

  return(
    <div id="playlist-tile" className="playlist-tile">
      <iframe src={`https://open.spotify.com/embed?uri=${props.scode}&theme=white&view=coverart`}
       width="300" height="380" frameBorder="0"
       theme="white"
       allowTransparency="true"></iframe>
    </div>
  )
}

export default PlaylistTile;
