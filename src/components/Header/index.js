import React, { Component } from 'react'
import Navbar from './Navbar'
import { Hamburger, Collapsible } from '../common'
import { Link } from '../typography'

class Header extends Component {
  state = {
    isExpanded: false
  }

  toggleCollapse = () => {
    this.setState({ isExpanded: !this.state.isExpanded })
  }

  render() { 
    return (
      <Navbar className="navbar fixed-top" role="navigation">
        <Link className="navbar-brand" href="#">Fikri's Den</Link>
        <ul className="nav mx-auto hidden-md">
          <li className="nav-item">
            <Link href="#" className="nav-a">Intro</Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-a">Bio</Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-a">My Skills</Link>
          </li>
        </ul>
        <Hamburger
          className="btn visible-md p-0"
          onClick={this.toggleCollapse} />
        <Collapsible isExpanded={this.state.isExpanded}>
          <Link href="#">Intro</Link>
          <Link href="#">Bio</Link>
          <Link href="#">My Skills</Link>
        </Collapsible>
      </Navbar>
    )
  }
}

export default Header