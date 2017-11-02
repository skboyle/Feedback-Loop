import React from 'react'
import TextAreaFormItem from './TextAreaFormItem'
import ErrorBox from './ErrorBox'

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      structure: '',
      mixdown: '',
      style: '',
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

    if (this.state.structure.lenght < 50){
      errors.push("Structure feedback must be at least 50 characters long. ")
    }

    if (this.state.mixdown.lenght < 50){
      errors.push("Mixdown feedback must be at least 50 characters long. ")
    }

    if (this.state.style.lenght < 50){
      errors.push("Style feedback must be at least 50 characters long. ")
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
      errors: []
    })
  }

  feedbackFormSubmit(event){
    event.preventDefault();
    let Payload = {
      style: this.state.style,
      structure: this.state.structure,
      mixdown: this.state.mixdown,
      song_id: this.props.currentSong,
      user_id: this.props.currentUser
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
        <div>
          {errors}
        </div>
        <TextAreaFormItem
          name="structure"
          content={this.state.structure}
          nameText="Structure"
          handler={this.handleChange}
        />

        <TextAreaFormItem
          name="mixdown"
          content={this.state.mixdown}
          nameText="Mixdown"
          handler={this.handleChange}
        />

        <TextAreaFormItem
          name="style"
          content={this.state.style}
          nameText="Style"
          handler={this.handleChange}
        />

        <input type="submit" className="button" value="Submit " onClick={handleSubmit} />
      </form>
    )
  }
}

export default FeedbackForm;
