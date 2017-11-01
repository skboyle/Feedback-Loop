import React from 'react'
import TextAreaFormItem from './TextAreaFormItem'

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



  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      structure: '',
      mixdown: '',
      style: '',
    })
  }

  feedbackFormSubmit(event){
    console.log(this.state)
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
    let handleSubmit = (event) => this.feedbackFormSubmit(event)

    return (
      <form className="feedback-form" id="feedback-form">

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
        <div>

        </div>
        <input type="submit" className="button" value="Submit " onClick={handleSubmit} />
      </form>
    )
  }
}

export default FeedbackForm;
