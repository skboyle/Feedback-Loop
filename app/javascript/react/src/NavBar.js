import React from 'react';
import { Link } from 'react-router';

const NavBar = props => {



  return(
    <div className="nav-bar">
        <Link to= {`/`}>
      <h1>Feedback Loop</h1>
        </Link>

    <div className="my-links">
    <div className="link-my-tracks">
      <Link to= {`/user`}>
        <h4>My Tracks</h4>
      </Link>
    </div>

    <div className="link-favorites">
      <Link to= {`/favorites`}>
      <h4>Favorites</h4>
      </Link>
    </div>

    <div className="link-feed">
      <Link to= {`/`}>
        <h4>Feed</h4>
      </Link>
    </div>

    <div className="link-info">
      <Link to= {`/info`}>
        <h4>Info</h4>
      </Link>
    </div>
  </div>
    {props.children}
</div>
)
}

export default NavBar;
