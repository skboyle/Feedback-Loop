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
      <h3> {props.name}</h3>
      <h4>By: <b>{props.artist_name}</b></h4>
      <p><b>Genre:</b> {props.genre}</p>
      <a target="_blank" href={props.song_url}><b>Listen</b></a>
      <p><b>Description:</b> {props.description}</p>
      <p><b>Favorites:</b> {props.heart_total}</p>
      <button
        className="button"
        type="button"
        name={props.id}
        value="1"
        id={heartclass}
        onClick={props.handler}>
        ♥
      </button>
    <br/><br/>
    </div>

  )
}

export default SongShowInfo;
