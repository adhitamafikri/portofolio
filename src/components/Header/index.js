import React, { Component } from 'react'
import Navbar from './Navbar'
import { Collapsible, Button, Div, Container } from '../common'
import { Link, UnorderedList, ListItem } from '../typography'

class Header extends Component {
  state = {
    isExpanded: false
  }

  toggleCollapse = () => {
    this.setState({ isExpanded: !this.state.isExpanded })
  }

  render() { 
    return (
      <Navbar>
        <Container className="container d-flex justify-content-between align-items-center">
          <Link href="#">Fikri's Den</Link>
          <UnorderedList className="d-flex justify-content-around align-items-center hidden-md">
            <ListItem>
              <Link href="#">Intro</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Bio</Link>
            </ListItem>
            <ListItem>
              <Link href="#">My Skills</Link>
            </ListItem>
          </UnorderedList>
          <Button hamburger className="visible-md" onClick={this.toggleCollapse}>
            <Div className="burger-line"></Div>
            <Div className="burger-line"></Div>
            <Div className="burger-line"></Div>
          </Button>
          <Collapsible isExpanded={this.state.isExpanded}>
            <Link href="#">Intro</Link>
            <Link href="#">Bio</Link>
            <Link href="#">My Skills</Link>
          </Collapsible>
        </Container>
      </Navbar>
    )
  }
}

export default Header