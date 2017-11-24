import React from 'react';
import PlaylistContainer from './PlaylistContainer'
import NavBar from './NavBar'
import BurgerMenu from './BurgerMenu'


class Playlist extends React.Component{
 constructor(props) {
   super(props);
   this.state = {
     feedbacks: [],
   }
 }

 componentDidMount() {
   fetch('/api/v1/feedbacks', {
     credentials: 'same-origin',
     method: 'GET',
     headers: { 'Content-Type': 'application/json' }
   })
    .then(response => response.json())
    .then (body => {
      this.setState({ feedbacks: body })
    })
 }

  render() {
    return(
      <div className="home-index">
        <BurgerMenu/>
        <div className="playlist-container">
          <PlaylistContainer
            feedbacks={this.state.feedbacks}
          />
        </div>
      </div>
    )
  }
}

export default Playlist;
