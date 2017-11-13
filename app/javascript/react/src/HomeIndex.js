import React from 'react';
import SongContainer from './SongContainer'
import NavBar from './NavBar'


class HomeIndex extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    }
  }

  componentDidMount() {
    fetch('/api/v1/songs', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then (body => {
      this.setState({ songs: body })
    })
  }

  render() {  
    return(
      <div className="home-index">
        <NavBar/>

        <SongContainer
          songs={this.state.songs}
        />
      </div>
    )
  }
}

export default HomeIndex;
