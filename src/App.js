import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Kush is the coolest, ever.</p>
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
        <Card name="Project Ish" likes={5}></Card>
        <Card name="The Kush Kode" likes={100}></Card>
        <Card name="Goat Web Design" likes={25}></Card>
        <Card name="BubbaKushner.com" likes={187}></Card>
        <Card name="The Real Facebook" likes={78}></Card>
      </header>
    </div>
  );
}

export default App;
