import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
// sections import
import { WelcomeSection, IntroSection, BioSection, SkillSection } from './components/sections'

// import theme
import MainTheme from './components/themes/main'
import AlternateTheme from './components/themes/alternate'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: MainTheme
    }
  }

  changeThemeDefault = () => {
    this.setState({ theme: MainTheme })
  }

  changeThemeAlternate = () => {
    this.setState({ theme: AlternateTheme })
  }

  render() {
    const { 
      headerTheme, welcomeSectionTheme, introSectionTheme,
      BioSectionTheme, SkillSectionTheme, FooterTheme
    } = this.state.theme

    return (
      <div className="App">
        <Header theme={headerTheme} />
        <main role="main">
          <WelcomeSection theme={welcomeSectionTheme} />
          <IntroSection theme={introSectionTheme} />
          <BioSection theme={BioSectionTheme} />
          <SkillSection theme={SkillSectionTheme} />
          <Footer theme={FooterTheme}
            changeThemeDefault={this.changeThemeDefault}
            changeThemeAlternate={this.changeThemeAlternate} />
        </main>
      </div>
    )
  }
}

export default App
