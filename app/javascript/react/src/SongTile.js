import React from 'react';
import { Link } from 'react-router';

const SongTile = props => {

  return(
    <div id="song-tile" className="large-3 columns">
      <div className="Song-tile-name">
        <Link to= {`/songs/${props.song.id}`}>
          <img className="song-tile-image" src={`${props.song.image_url}`} alt={`Picture of ${props.song.name}`}/>
          <h3 className="song-name"><strong>{props.song.name}:</strong> {props.song.user.id}</h3>
        </Link>
      </div>
    </div>
  )
}

export default SongTile;
