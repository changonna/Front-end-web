import React from 'react';
import logo from './logo.svg';
import './App.css';

function func<T>(x: T): T {
  return x;
}

const arrowFunc = <T,>(x: T): T => {
  return x;
}

function App() {
  return (
    <div className="App">
      <h1>HELLO WORLD!</h1>
    </div>
  );
}

export default App;
