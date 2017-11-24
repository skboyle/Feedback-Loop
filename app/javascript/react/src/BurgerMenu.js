import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { stack as Menu } from 'react-burger-menu';



class BurgerMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <div>
      <Menu>
        <h1>Feedback Loop</h1>
        <br/>
        <a id="mytracks" className="menu-item" href="/user">My Tracks</a>
        <a id="favorites" className="menu-item" href="/favorites">Favorites</a>
        <a id="playlist" className="menu-item" href="/playlist">Playlist</a>
        <a id="feed" className="menu-item" href="/">Feed</a>
      </Menu>
    </div>
    );
  }
}

export default BurgerMenu;
