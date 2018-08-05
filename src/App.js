import React, { Component } from 'react'
import Header from './components/Header'
// sections import
import { WelcomeSection, IntroSection } from './components/sections'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main role="main">
          <WelcomeSection />
          <IntroSection />
        </main>
      </div>
    )
  }
}

export default App
