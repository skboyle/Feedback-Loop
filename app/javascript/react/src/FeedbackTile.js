import React from 'react';
import { Link } from 'react-router';

const FeedbackTile = props => {
  if (props.scode != "") {
  return(
    <div className="feedback-tile">
      <div className="feedback-text">
        <p><b>Structure: </b>{props.structure}</p>
        <p><b>Mixdown: </b>{props.mixdown} </p>
        <p><b>Style: </b>{props.style} </p>
        <p className="feedback-info"> <b>Recomended Listening:</b></p>
        <p className="user-quote"> - {props.user}</p>
        <iframe src={`https://open.spotify.com/embed?uri=${props.scode}`}
         width="300" height="80" frameBorder="0"
         allowTransparency="true"></iframe>
          <p className="feedback-info-button">
      <button
        className="button"
        type="button"
        value="1"
        id={props.id}
        name={props.userid}
        onClick={props.voteHandler}>
        ▲
      </button>
      <button
        className="button"
        type="button"
        value="-1"
        id={props.id}
        name={props.userid}
        onClick={props.voteHandler}>
        ▼
      </button>
      <b>  {props.voteTotal}</b>
      </p>
      {/* <hr noshade="noshade"/> */}
    </div>
  </div>
  )
  }else{
  return(
    <div className="feedback-tile">
      <div className="feedback-text">
        <p><b>Structure: </b>{props.structure}</p>
        <p><b>Mixdown: </b>{props.mixdown} </p>
        <p><b>Style: </b>{props.style} </p>
        <p><b>Recomended Listening: </b></p>

        <p className="user-quote"> - {props.user}</p>
          <p className="feedback-info">
      <button
        className="button"
        type="button"
        value="1"
        id={props.id}
        name={props.userid}
        onClick={props.voteHandler}>
        ▲
      </button>
      <button
        className="button"
        type="button"
        value="-1"
        id={props.id}
        name={props.userid}
        onClick={props.voteHandler}>
        ▼
      </button>
      <b>  {props.voteTotal}</b>
      </p>
    </div>
  </div>
  )
}

}

export default FeedbackTile;
