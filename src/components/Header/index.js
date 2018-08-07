import React, { Component } from 'react'
import Navbar from './Navbar'
import { Button, Div, Collapsible } from '../common'
import { Link, UnorderedList, ListItem } from '../typography'
import { ThemeProvider } from 'styled-components'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isExpanded: false
    }
  }

  toggleCollapse = () => {
    this.setState({ isExpanded: !this.state.isExpanded })
  }

  render() { 
    return (
      <ThemeProvider theme={this.props.theme}>
        <Navbar>
          <Div className="container d-flex justify-content-between align-items-center px-3">
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
            <Collapsible isExpanded={this.state.isExpanded} className="py-1 px-3">
              <Link href="#">Intro</Link>
              <Link href="#">Bio</Link>
              <Link href="#">My Skills</Link>
            </Collapsible>
          </Div>
        </Navbar>
      </ThemeProvider>
    )
  }
}

export default Header