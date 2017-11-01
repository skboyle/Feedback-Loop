import React from 'react';
import { Link } from 'react-router';

const SongShowInfo = props => {


  return(
    <div className="song-show-info">
      <img className="song-tile-image" src={`${props.image_url}`} alt={`Picture of ${props.name}`}/>
      <h2> {props.name}</h2>
      <h4>By: {props.artist_name}</h4>
      <h4>Genre: {props.genre}</h4>
      <a target="_blank" href={props.song_url}>Listen</a>
      <p> {props.description}</p>

      </div>
  )
}

export default SongShowInfo;
