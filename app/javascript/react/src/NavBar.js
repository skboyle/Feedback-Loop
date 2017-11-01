import React from 'react';
import { Link } from 'react-router';

const NavBar = props => {



  return(
    <div className="nav-bar">
      <h1>Feedback Loop!</h1>
        <Link to= {`/`}>
      <h2>Home</h2>
        </Link>

        <Link to= {`/signout/`}>
      <h2>Sing Out</h2>
        </Link>

    </div>
  )
}

export default NavBar;
