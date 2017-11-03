import React from 'react'
import NewSong from './NewSong'
import SongTile from './SongTile'
import SongShowInfo from './SongShowInfo'
import NavBar from './NavBar'


class UserHomePage extends React.Component{
 constructor(props) {
   super(props);
   this.state = {
     feedbacks: [],
     songs: [],
     currentUser: []
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
        console.log(body)
        this.setState({
          feedbacks: body.feedbacks,
          songs: body.songs,
          currentUser: body.user
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
    let songs = this.state.songs.map(song => {
      return(
        <SongShowInfo
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
      <div className="user-home-page">
        <NavBar/>
        <div className="row">
          <div className="small-3 columns">
        <NewSong
          addNewSong={this.addNewSong}
          currentUser={this.state.currentUser.id}
        />
        </div>
        <div className="small-8 columns">
          <div className="my-songs">
            <div className="row">
        {songs}
        </div>
        </div>
      </div>
        </div>

      </div>
    )
  }
}
export default UserHomePage;
