import React from 'react'
import NewSong from './NewSong'
import SongTile from './SongTile'


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
    let addNewSong = (payLoad) => this.addNewSong(payLoad)
    let songs = this.state.songs.map(song => {
      return(
        <SongTile
          key={song.id}
          song={song}
          currentUser={this.state.currentUser.id}
        />
      )
    })
    return(
      <div className="user-home-page">

        <NewSong
          addNewSong={this.addNewSong}
          currentUser={this.state.currentUser.id}
        />

        {songs}

      </div>
    )
  }
}
export default UserHomePage;
