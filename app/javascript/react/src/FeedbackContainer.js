import React from 'react';
import FeedbackTile from './FeedbackTile'

const FeedbackContainer = props => {
  let feedbacks = props.feedbacks.map(feedback => {
    return(
        <FeedbackTile
          key={feedback.id}
          structure={feedback.structure}
          mixdown={feedback.mixdown}
          style={feedback.style}
          user={feedback.user.id}
        />
    )
  })
  return(
    <div className="feedback-container">
      <h2>(Feedback Container)</h2>
      <ul>
        {feedbacks}
      </ul>
    </div>
  );
}

export default FeedbackContainer
