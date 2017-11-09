import React from 'react';
import SongContainer from './SongContainer'
import NavBar from './NavBar'
import Access from './Access'


class FavoritesIndex extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentUser: [],
      songs: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/user/is_signed_in.json', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ currentUser: body })
    })
    fetch('/api/v1/favorites', {
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
    if (this.state.currentUser.favorites) {
      return(
        <div className="home-index">
          <NavBar/>

          <SongContainer
            songs={this.state.songs}
          />
        </div>
      )

    }else{

      return(
        <div>
          <NavBar/>
          <div className="user-home-page">

            <Access
              text="Please log in to view favorites."
            />

          </div>
        </div>
      )
    }
  }
}

export default FavoritesIndex;
