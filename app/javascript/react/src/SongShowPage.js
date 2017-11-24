import React from 'react'
import FeedbackForm from './FeedbackForm'
import SongShowInfo from './SongShowInfo'
import FeedbackTile from './FeedbackTile'
import NavBar from './NavBar'
import Access from './Access'
import BurgerMenu from './BurgerMenu'

class SongShowPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      feedbacks: [],
      song: [],
      currentUser: [],
      favorites: [],
      buttonclass: []
    }
    this.addNewFeedback = this.addNewFeedback.bind(this)
    this.handleVote = this.handleVote.bind(this)
    this.favoriteHandler = this.favoriteHandler.bind(this)
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
      let favorites = song.favorites;
      this.setState({feedbacks: feedbacks, song: song, favorites: favorites})
    })
  }


  handleVote(event) {
    if (event.target.name == this.state.currentUser.id){
      console.log('You cannot vote on your own feedback.')
    } else{
      let payLoad = {
        feedback_id: parseInt(event.target.id),
        user_id: this.state.currentUser.id,
        vote: parseInt(event.target.value)
      }
      fetch(`/api/v1/upvotes`, {
        credentials: 'same-origin',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payLoad)
      })
      .then(response => response.json())
      .then(responseData =>{
        this.setState({ feedbacks: responseData })
      })
    }
  }

  favoriteHandler(event) {
    let payLoad = {
      song_id: parseInt(event.target.name),
      user_id: this.state.currentUser.id,
      heart: parseInt(event.target.value)
    }
    fetch(`/api/v1/favorites`, {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payLoad)
    })
    .then(response => response.json())
    .then(responseData =>{
      this.setState({ song: responseData, favorites: responseData.favorites })
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
      return body
    })
    .then(responseData =>{
      this.setState({ feedbacks: this.state.feedbacks.concat(responseData) })
    })
  }

  render() {
      let favoriteHandler = (event) => this.favoriteHandler(event)
      let handleVote = (event) => this.voteHandler(event)
      let addNewFeedback = (payLoad) => this.addNewFeedback(payLoad)
      let feedbacks = this.state.feedbacks.map(feedback => {
        return(
          <FeedbackTile
            key={feedback.id}
            id={feedback.id}
            userid={feedback.user_id}
            structure={feedback.structure}
            mixdown={feedback.mixdown}
            style={feedback.style}
            user={feedback.username}
            currentUser={this.state.currentUser}
            voteHandler={this.handleVote}
            voteTotal={feedback.vote_total}
            scode={feedback.recomendations}
          />
        )
      })

      if (this.state.currentUser) {
      return(
        <div>
          <BurgerMenu/>
          <div className="song-home-margin">
          {/* <div className="row"> */}
            <div className="row small-up-2 medium-up-3 large-up-4">
              <div className="column">

                <SongShowInfo
                  key={this.state.song.id}
                  id={this.state.song.id}
                  name={this.state.song.name}
                  artist_name={this.state.song.artist_name}
                  genre={this.state.song.genre}
                  description={this.state.song.description}
                  image_url={this.state.song.image_url}
                  song_url={this.state.song.song_url}
                  heart_total={this.state.song.heart_total}
                  username={this.state.song.username}
                  handler={this.favoriteHandler}
                  currentUser={this.state.currentUser.id}
                  favorites={this.state.favorites}

                />
                <FeedbackForm
                  addNewFeedback={this.addNewFeedback}
                  currentSong={this.state.song}
                  currentUser={this.state.currentUser}
                />
              </div>
              <div className="feedback-scroll">
                {feedbacks}
              </div>
            </div>
          </div>
        </div>
      // </div>
      )
    } else {

      return(
        <div>
          <BurgerMenu/>
          <div className="song-home-margin">
            <div className="row small-up-2 medium-up-3 large-up-4">
              <div className="column">
                <SongShowInfo
                  key={this.state.song.id}
                  id={this.state.song.id}
                  name={this.state.song.name}
                  artist_name={this.state.song.artist_name}
                  genre={this.state.song.genre}
                  description={this.state.song.description}
                  image_url={this.state.song.image_url}
                  song_url={this.state.song.song_url}
                  heart_total={this.state.song.heart_total}
                  username={this.state.song.username}
                  handler={this.favoriteHandler}
                  // currentUser={this.state.currentUser.id}
                  favorites={this.state.favorites}

                />
                <Access
                  text="Log in to give feedback. "
                />
            </div>
              <div className="feedback-scroll">

                {feedbacks}
              </div>
            </div>
          </div>
        </div>
      )
    }
    }
  }
  export default SongShowPage;
