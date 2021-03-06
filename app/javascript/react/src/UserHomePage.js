import React from 'react'
import NewSong from './NewSong'
import SongTile from './SongTile'
import SongShowInfo from './SongShowInfo'
import NavBar from './NavBar'
import SongContainer from './SongContainer'
import HomeSongContainer from './HomeSongContainer'
import UserSongs from './UserSongs'
import Access from './Access'
import BurgerMenu from './BurgerMenu'


class UserHomePage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      feedbacks: [],
      songs: [],
      currentUser: [],
      rating: []
    }
    this.addNewSong = this.addNewSong.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/user/is_signed_in.json', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        feedbacks: body.feedbacks,
        songs: body.songs,
        currentUser: body.user,
        rating: body.rating
      })
    })
  }

  addNewSong(payLoad) {
    let id = this.props.params.id
    fetch(`/api/v1/songs`, {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payLoad)
    })
    .then(response => response.json())
    .then (body =>{
      console.log(body)
      return body
    })
    .then(responseData =>{
      this.setState({ songs: this.state.songs.concat(responseData) })
    })
  }

  render() {
    let currentUser = this.state.currentUser
    let addNewSong = (payLoad) => this.addNewSong(payLoad)
    if (this.state.currentUser) {
      let songs = this.state.songs.map(song => {
        return(
          <UserSongs
            key={song.id}
            id={song.id}
            name={song.name}
            artist_name={song.artist_name}
            genre={song.genre}
            description={song.description}
            image_url={song.image_url}
            song_url={song.song_url}
            heart_total={song.heart_total}
            username={song.username}
            handler={this.favoriteHandler}
          />
        )
      })

      return(
        <div>
          <BurgerMenu/>
          <div className="user-home-page">
            <div className="row small-up-2 medium-up-3 large-up-4">
              <div className="column">
                <NewSong
                  addNewSong={this.addNewSong}
                  currentUser={this.state.currentUser}
                  feedbacks={this.state.feedbacks}
                  songs={this.state.songs}
                  rating={this.state.rating}

                />
              </div>
              <div className="columns">
              <div className="user-songs">
                {songs}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }else{
      return(
        <div>
          <BurgerMenu/>
          <div className="user-home-page">
            <Access
              text="Please log in access your homepage."
            />
          </div>
        </div>
      )
    }
  }
}
export default UserHomePage;
