import React from 'react';
import { Link } from 'react-router';

const UserSongs = props => {

  return(
    <div id="song-tile" className="song-tile">
      <div className="container">
        <Link to= {`/songs/${props.id}`}>
          <img className="image" src={`${props.image_url}`} alt={`Picture of ${props.name}`}/>
          <div className="overlay" >
            <div className="imagetext"><p>'{props.name}'</p>
              <p> by {props.artist_name}</p>
              <p>Genre: {props.genre}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default UserSongs;
