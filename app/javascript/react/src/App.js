import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import HomeIndex from './HomeIndex';
import SongShowPage from './SongShowPage';
import UserHomePage from './UserHomePage';
import $ from "jquery";
import Grid from 'react-css-grid'


const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path="/user" component={UserHomePage} />
      <Route path="/" component={HomeIndex} />
      <Route exact path="/songs/:id" component={SongShowPage}/>

    </Router>
  )
}

export default App;
