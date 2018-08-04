import React, { Component } from 'react'

class Navbar extends Component {
  state = {  }
  render() { 
    return (
      <nav className="navbar fixed-top navbar-dark bg-dark" role="navigation">
        <a className="navbar-brand" href="#">Fikri's Den</a>
        <ul className="nav">
          <li className="nav-item">
            <a href="#" className="nav-link">Intro</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Bio</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar