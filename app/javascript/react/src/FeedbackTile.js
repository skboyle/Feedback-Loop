import React from 'react';
import { Link } from 'react-router';

const FeedbackTile = props => {


  return(
    <div className="feedback-tile">
      <div className="feedback-text">
        <p>Structure: <i>{props.structure}</i> </p>
        <p>Mixdown: {props.mixdown} </p>
        <p>Style: {props.style} </p>
        <p> - {props.user} </p>
        <p><b>Votes:</b> {props.voteTotal}</p>
      </div>
     <div>
      <button
        className="button"
        type="button"
        name="upvote"
        value="1"
        id={props.id}
        onClick={props.voteHandler}>
        ▲
      </button>
      <button
        className="button"
        type="button"
        name="downvote"
        value="-1"
        id={props.id}
        onClick={props.voteHandler}>
        ▼
      </button>
    </div>
  </div>
  )
}

export default FeedbackTile;
