import React, { Component } from 'react'
import Header from './components/Header'
// sections import
import { WelcomeSection, IntroSection, BioSection } from './components/sections'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main role="main">
          <WelcomeSection />
          <IntroSection />
          <BioSection />
        </main>
      </div>
    )
  }
}

export default App
