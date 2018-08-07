import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
// sections import
import { WelcomeSection, IntroSection, BioSection, SkillSection } from './components/sections'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main role="main">
          <WelcomeSection />
          <IntroSection />
          <BioSection />
          <SkillSection />
          <Footer />
        </main>
      </div>
    )
  }
}

export default App
