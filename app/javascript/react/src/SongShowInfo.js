import React from 'react';
import { Link } from 'react-router';

const SongShowInfo = props => {

  let favoriteid = ""
  let heartclass = ""
  props.favorites.forEach((favorite) => {
    if (favorite.user_id == props.currentUser){
      favoriteid = favorite
    }
    if (favoriteid.heart == 1){
      heartclass = "red"
    } else {
      heartclass = ""
    }
  })


  return(

    <div className="song-show-info">
      <img className="song-tile-image" src={`${props.image_url}`} alt={`Picture of ${props.name}`}/>
      <h4> {props.name} By: <b>{props.artist_name}</b></h4>
      <p><b>Genre:</b> {props.genre}</p>
          <a target="_blank" href={props.song_url}><b>Listen</b></a>
           &nbsp;
          <button
            className="button"
            type="button"
            name={props.id}
            value="1"
            id={heartclass}
            onClick={props.handler}>
            ♥ {props.heart_total}
          </button>

      <p><b>Description:</b> {props.description}</p>
    </div>

  )
}

export default SongShowInfo;
