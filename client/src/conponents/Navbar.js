import React from 'react';
import Nav from './Nav.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
     

<nav>
<Link to="/">Home</Link>
<Link to="/contacts">Contact</Link>
<Link to="/ajout">Add</Link>

<div className="animation start-home"></div>
</nav>


    </div>
  )
}

export default Navbar
