import React from 'react';
import { Link } from 'react-router';

const SongTile = props => {

  return(
    <div id="song-tile" className="song-tile">
      <div className="container">
        <Link to= {`/songs/${props.song.id}`}>
          <img className="image" src={`${props.song.image_url}`} alt={`Picture of ${props.song.name}`}/>
          <div className="overlay" >
            <div className="text"><p>'{props.song.name}'</p>
              <p> by </p>
              <p>{props.song.artist_name}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SongTile;
