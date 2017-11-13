import React from 'react';
import PlaylistTile from './PlaylistTile'


const PlaylistContainer = props => {
  let playlist = props.feedbacks.reverse().map(feedback => {
    if (feedback.recomendations){
      return(
        <div className="columns">
          <PlaylistTile
            key={feedback.id}
            scode={feedback.recomendations}
          />
        </div>
      )
    }
  })

  return(
    <div className="row small-up-2 large-up-3">
        {playlist}
    </div>
  );
}


export default PlaylistContainer
