import React from 'react'
import ErrorBox from './ErrorBox'
import FormItem from './FormItem'
import TextAreaFormItem from './TextAreaFormItem'
import DropDown from './DropDown'

class NewSong extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      artist_name: '',
      genre: '',
      description: '',
      song_url: '',
      image_url: '',
      errors: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleState = this.handleState.bind(this);
    this.submitSongForm = this.submitSongForm.bind(this);
    this.validateContent = this.validateContent.bind(this);
    this.validateSubmit = this.validateSubmit.bind(this);
  }


  handleChange(event){
    let field = event.target.name
    let newValue = event.target.value
    this.setState({[field]: newValue})
  }

  handleState(event) {
    this.setState({ state: event.target.value })
    }

  validateContent(selection) {
    let errors = []

    if (this.state.name === ""){
      errors.push("• Name cannot be blank. ")
    }

    if (this.state.genre === ""){
      errors.push("• Please select a genre. ")
    }

    if (this.state.description.length < 1 ){
      errors.push("• Description required. ")
    }

    if (this.state.description.length > 250 ){
      errors.push("• Description must be under 250 characters. ")
    }

    if (this.state.song_url === ""){
      errors.push("• Song URL required. ")
    }

    if (this.props.feedbacks.length / this.props.songs.length <= 3){
      errors.push("• feedback ratio is too low.")
    }

    if (this.props.rating < 3){
      errors.push("• feedback rating is too low.")
    }

    this.setState({errors: errors})

    if (errors.length){
      return false;
    } else {
      return true;
    }
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      name: '',
      artist_name: '',
      genre: '',
      description: '',
      song_url: '',
      image_url: '',
      errors: []
    })
  }

  validateSubmit(event){
    event.preventDefault();
    if(this.validateContent() === false) {
      console.log('bad form');
      return false;
    }
    this.submitSongForm(event)
    this.handleClearForm(event)
  }

  submitSongForm(event){
    event.preventDefault();
    let SongPayload = {
      name: this.state.name,
      artist_name: this.state.artist_name,
      genre: this.state.genre,
      description: this.state.description,
      song_url: this.state.song_url,
      image_url: this.state.image_url,
      user_id: this.props.currentUser.id
    }
    if (SongPayload.image_url == "") {
      SongPayload.image_url = "http://freevector.co/wp-content/uploads/2014/06/54450-music-black-circular-button.png"
    }
    this.props.addNewSong(SongPayload);
  }


  render() {
    let handleSubmit = (event) => this.validateSubmit(event)
    let errors;
    if(this.state.errors.length) {
     errors = <ErrorBox errors={this.state.errors} />
   }

    return (
      <form className="site-form" id="song-form">
        <h3 className="form-title">ADD A SONG</h3>
        <div>
          {errors}
        </div>
        <FormItem
          name="name"
          content={this.state.name}
          formText="Song Name"
          handler={this.handleChange}
        />

        <FormItem
          name="artist_name"
          content={this.state.artist_name}
          formText="Artist Name"
          handler={this.handleChange}
        />

        <DropDown
          name="genre"
          content={this.state.genre}
          formText="Genre"
          handler={this.handleChange}
        />

        <FormItem
          name="song_url"
          content={this.state.song_url}
          // formText="Song URL"
          handler={this.handleChange}
          formText="Song URL"
        />

        <FormItem
          name="image_url"
          content={this.state.image_url}
          formText="Image URL"
          handler={this.handleChange}
        />

        <TextAreaFormItem
          name="description"
          content={this.state.description}
          formText="Description"
          handler={this.handleChange}

        />

        <input type="submit" className="button" value="Submit " onClick={handleSubmit} />
      </form>
    )
  }
}
export default NewSong;
