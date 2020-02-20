import React from 'react';
import logo from './images/PinClipart.com_check-list-clip-art_710741.png';
import './App.css';
import Todo from  './Todo.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Todo list for when Coffee hasn't kicked in yet.
        </p>
      </header>
      <Todo />
    </div>
  );
}

export default App;
