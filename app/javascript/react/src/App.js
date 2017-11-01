import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import HomeIndex from './HomeIndex';
import SongShowPage from './SongShowPage';

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path="/" component={HomeIndex} />
      <Route exact path="/songs/:id" component={SongShowPage}/>

    </Router>
  )
}

export default App;
