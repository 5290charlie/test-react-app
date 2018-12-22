import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello world</h1>
          <h3>Welcome to the test react app!</h3>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <section id="main">
          MAIN
        </section>
        <footer>
          footer
        </footer>
      </div>
    );
  }
}

export default App;
