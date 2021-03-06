import React from 'react';
import { Link } from 'react-router';

const InfoContainer = props => {

  return(
    <div id="info-tile" className="large-12 columns ">
      <h1>Welcome to Feedback Loop!</h1>
      <p>Feedback Loop is a place for music makers to improve their song writing by giving and receiving constructive feedback.
      <br/>
      <br/>
      After loging in though spotify you'll be brought to the 'Feed'. The feed is an album art gallery of the most recentally posted songs. From there you can click a track's album art to see it's page. Each song page includes the song's info along with a form for giving constructive feedback based on structure, mixdown and style and for giving Spotify recomendations. You'll also see the feedback the song as already received.
      <br/>
      <br/>
      Feedback Loop encourages positive interaction and helpful critiques, so remember to be thoughtful. Your feedback is rated and after making three positive critiques's you can post a song of your own.
      <br/>
      <br/>
      Check out the playlist for a collection of all user recomended songs.
      <br/>
      <br/>
      Have fun and be nice!
    </p>
    </div>
  )
}

export default InfoContainer;
