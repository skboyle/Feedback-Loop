import React from 'react';
import { Link } from 'react-router';

const FeedbackTile = props => {


  return(
    <div className="feedback-tile">
      <p>Structure: <i>{props.structure}</i> </p>
      <p>Mixdown: {props.mixdown} </p>
      <p>Style: {props.style} </p>
      <p>- {props.user} </p>
    </div>
  )
}

export default FeedbackTile;
