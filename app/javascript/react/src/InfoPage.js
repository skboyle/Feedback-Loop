import React from 'react';
import InfoContainer from './InfoContainer'
import NavBar from './NavBar'

class InfoPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    }
  }

  componentDidMount() {
    fetch('/api/v1/songs', {
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
    return(
      <div>
        <NavBar/>
        <div className="info-page">
          <div className="row" >
            <div className="small-10  medium-12 large-9 large-offset-2 columns">
              <InfoContainer/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default InfoPage;
