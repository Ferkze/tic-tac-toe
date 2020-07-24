import React from 'react';
import logo from './logo.svg';

import WelcomeHeader from './components/WelcomeHeader'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WelcomeHeader name="Sara" />
        <p>
          Welcome to my first <code>Tic-tac-toe</code> code!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start playing
        </a>
      </header>
    </div>
  );
}

export default App;
