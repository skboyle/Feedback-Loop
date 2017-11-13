import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import HomeIndex from './HomeIndex';
import SongShowPage from './SongShowPage';
import UserHomePage from './UserHomePage';
import $ from "jquery";
import Grid from 'react-css-grid'
import NavBar from './NavBar'
import FavoritesIndex from './FavoritesIndex'
import InfoPage from './InfoPage'
import Playlist from './Playlist'


const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path="/" component={HomeIndex}/>
      <Route path="/user" component={UserHomePage} />
      <Route path="/favorites" component={FavoritesIndex} />
      <Route path="/songs" component={HomeIndex} />
      <Route path="/info" component={InfoPage} />
      <Route exact path="/songs/:id" component={SongShowPage}/>
      <Route exact path="/playlist" component={Playlist}/>
    </Router>
  )
}

export default App;
