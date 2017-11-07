import React from 'react';
import { Link } from 'react-router';

const FeedbackTile = props => {


  return(
    <div className="feedback-tile">
      <div className="feedback-text">
        <p><b>Structure: </b>{props.structure}</p>
        <p><b>SMixdown: </b>{props.mixdown} </p>
        <p><b>Style: </b>{props.style} </p>
        <p className="user-quote"> - {props.user}</p>
          <p className="feedback-info">
            <b></b>   {props.voteTotal}
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
      </p>
      <hr noshade="noshade"/>
    </div>
  </div>
  )
}

export default FeedbackTile;
