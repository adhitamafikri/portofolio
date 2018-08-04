import React, { Component } from 'react'
import Navbar from './Navbar'
import { Link } from '../typography'
import { Hamburger, Collapse } from '../common'

class Header extends Component {
  state = {
    isExpanded: false
  }

  toggleCollapse = () => {
    console.log('stokeleyeee')
    this.setState({ isExpanded: !this.state.isExpanded })
  }

  render() { 
    return (
      <Navbar className="navbar fixed-top" role="navigation">
        <Link className="navbar-brand" href="#">Fikri's Den</Link>
        <ul className="nav mx-auto hidden-md">
          <li className="nav-item">
            <Link href="#" className="nav-link">Intro</Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link">Bio</Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link">My Skills</Link>
          </li>
        </ul>
        <Hamburger
          className="btn visible-md"
          onClick={this.toggleCollapse} />
        <Collapse className="collapse" isExpanded={this.state.isExpanded}>
          <h1>Collapseeeeee</h1>
        </Collapse>
      </Navbar>
    )
  }
}

export default Header