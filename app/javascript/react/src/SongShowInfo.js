import React from 'react';
import { Link } from 'react-router';

const SongShowInfo = props => {

  return(

    <div className="song-show-info">
      <img className="song-tile-image" src={`${props.image_url}`} alt={`Picture of ${props.name}`}/>
      <h3> {props.name}</h3>
      <h4>By: {props.artist_name}</h4>
      <p>Genre: {props.genre}</p>
      <a target="_blank" href={props.song_url}><b>Listen</b></a>
      <p> {props.description}</p>
      <button
        className={props.buttonclass}
        type="button"
        name="upvote"
        value="1"
        id={props.id}
        onClick={props.handler}>
        ♥{props.heart_total}
      </button>
    </div>

  )
}

export default SongShowInfo;
