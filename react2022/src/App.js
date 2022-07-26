import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  //return React.createElement("div", null, "Hello", React.createElement("b", null, "react"));
  const name = 'react';
  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: 16
      }}>
      {name}
    </div>
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Wowwwwwwwww <br/>
          헐랭.. <br/>
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
    </div>
  */
  );
}

export default App;
