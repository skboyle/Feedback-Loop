import React from 'react'
import FeedbackForm from './FeedbackForm'
import SongShowInfo from './SongShowInfo'
import FeedbackContainer from './FeedbackContainer'
import FeedbackTile from './FeedbackTile'

class SongShowPage extends React.Component{
 constructor(props) {
   super(props);
   this.state = {
     feedbacks: [],
     song: [],
     currentUser: []
   }
   this.addNewFeedback = this.addNewFeedback.bind(this)
 }

 componentDidMount() {
   fetch('/api/v1/user/is_signed_in.json', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(body => {
        this.setState({ currentUser: body.user })
      })

     let id = this.props.params.id
     fetch(`/api/v1/songs/${id}`,{
       credentials: 'same-origin',
       method: 'GET',
       headers: { 'Content-Type': 'application/json' }
     })
      .then(response => response.json())
      .then(body => {
       let song = body
       let feedbacks = song.feedbacks;
       this.setState({feedbacks: feedbacks, song: song})

     })
 }



 addNewFeedback(payLoad) {
  let id = this.props.params.id
  fetch(`/api/v1/songs/${id}/feedbacks`, {
    credentials: 'same-origin',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payLoad)
  })
  .then(response => response.json())
  .then (body =>{
    // let feedback = body
    // console.log(body)
    return body
  })
  .then(responseData =>{
    // try using .concat
    // debugger;
    this.setState({ feedbacks: this.state.feedbacks.concat(responseData) })
    // console.log([responseData, ...this.state.feedbacks])
    // debugger;
  })
 }


  render() {

    let addNewFeedback = (payLoad) => this.addNewFeedback(payLoad)
    let feedbacks = this.state.feedbacks.map(feedback => {
      return(

          <FeedbackTile
            key={feedback.id}
            structure={feedback.structure}
            mixdown={feedback.mixdown}
            style={feedback.style}
            user={feedback.username}
          />
      )
    })

    return(
      <div className="song-show-page">
        <FeedbackForm
          addNewFeedback={this.addNewFeedback}
          currentSong={this.state.song.id}
          currentUser={this.state.currentUser.id}
        />

        <SongShowInfo
          key={this.state.song.id}
          name={this.state.song.name}
          artist_name={this.state.song.artist_name}
          genre={this.state.song.genre}
          description={this.state.song.description}
          image_url={this.state.song.image_url}
          song_url={this.state.song.song_url}
          username={this.state.song.username}
        />

        {feedbacks}

      </div>
    )
  }
}
export default SongShowPage;
