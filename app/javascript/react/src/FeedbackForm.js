import React from 'react'
import TextAreaFormItem from './TextAreaFormItem'
import ErrorBox from './ErrorBox'
import FormItem from './FormItem'

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      structure: '',
      mixdown: '',
      style: '',
      recomendations: '',
      errors: []
    }
    this.handleChange = this.handleChange.bind(this);
  }



  handleChange(event){
    let field = event.target.name
    let newValue = event.target.value
    this.setState({[field]: newValue})
  }

  validateContent(selection) {
    let errors = []

    if (this.state.structure.length > 500 ||
      this.state.mixdown.length > 500 ||
      this.state.style.length > 500
    ){
      errors.push("• 500 character maximum per field.")
    }

    if (this.state.structure.length < 1 ||
      this.state.mixdown.length < 1 ||
      this.state.style.length < 1
    ){
      errors.push("• Fields cannot be blank.")
    }


    if(this.props.currentUser.id == this.props.currentSong.user.id){
      errors.push("• You cannot review your own song. ")
    }

    this.setState({errors: errors})

    if (errors.length){
      return false;
    } else {
      return true;
    }
  }

  validateSubmit(event){
    event.preventDefault();
    if(this.validateContent() === false) {
      console.log('bad form');
      return false;
    }

    this.feedbackFormSubmit(event)
    this.handleClearForm(event)
  }


  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      structure: '',
      mixdown: '',
      style: '',
      recomendations: '',
      errors: []
    })
  }

  feedbackFormSubmit(event){
    event.preventDefault();
    let Payload = {
      style: this.state.style,
      structure: this.state.structure,
      mixdown: this.state.mixdown,
      recomendations: this.state.recomendations,
      song_id: this.props.currentSong.id,
      user_id: this.props.currentUser.id
    }
    this.props.addNewFeedback(Payload);
  }


  render() {
    let handleSubmit = (event) => this.validateSubmit(event)
    let errors;
    if(this.state.errors.length) {
     errors = <ErrorBox errors={this.state.errors} />
   }

    return (
      <form className="feedback-form" id="feedback-form">
        <h3>Give Feedback</h3>
        <div>
          {errors}
        </div>
        <TextAreaFormItem
          name="structure"
          content={this.state.structure}
          nameText="Structure"
          handler={this.handleChange}
          formText="Like my flow?"
        />

        <TextAreaFormItem
          name="mixdown"
          content={this.state.mixdown}
          nameText="Mixdown"
          handler={this.handleChange}
          formText="How are my levels?"
        />

        <TextAreaFormItem
          name="style"
          content={this.state.style}
          nameText="Style"
          handler={this.handleChange}
          formText="Feeling the vibe?"
        />

        <FormItem
          name="recomendations"
          content={this.state.recomendations}
          nameText="Recomended listening:"
          handler={this.handleChange}
          formText="Paste Spotify URI here (Optional)"
        />

        <input type="submit" className="button" value="Submit " onClick={handleSubmit} />
      </form>
    )
  }
}

export default FeedbackForm;
