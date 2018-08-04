import React, { Component } from 'react'
import Header from './components/Header'

class App extends Component {
  // state = {
  //   loop: 6
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="mt-5 py-5" role="main">
          <section className="welcome-section">
            <div className="container">
              <h1 className="section-heading">
                Hey,<br/>Welcome to My<br/>Portofolio Site!
              </h1>
            </div>
          </section>
        </main>
      </div>
    )
  }
}

export default App
