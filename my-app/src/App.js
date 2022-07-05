// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'react';

function App() {
  const [activateText, setActivateText] = useState(false)
  const activate = () => {
    setActivateText(true)
  }
  return (
    <div className="App">
      <h1>🔥 SizzleMeter 🔥</h1>
      <p>{activateText ? "Test" : null}</p>
      <input type="text" placeholder="Search.."/>
      <button onClick={activate}>Submit</button>
      <p>Type in the name of any city to find out what the SizzleMeter rates it!</p>
    </div>
  );
}

export default App;
