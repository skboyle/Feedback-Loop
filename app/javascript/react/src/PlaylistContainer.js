import React from 'react';
import PlaylistTile from './PlaylistTile'


const PlaylistContainer = props => {
  let playlist = props.feedbacks.reverse().map(feedback => {
    if (feedback.recomendations){
      return(
        <div className="column">
          <PlaylistTile
            key={feedback.id}
            scode={feedback.recomendations}
          />
        </div>
      )
    }
  })

  return(
    <div className="row small-up-2 medium-up-3 large-up-4">
        {playlist}
    </div>
  );
}


export default PlaylistContainer
