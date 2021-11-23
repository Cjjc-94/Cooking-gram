import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './Dashboard';


function App() {
  return (
    <div className="App">
      <Router>
      <Dashboard/>
      </Router>
    </div>
  );
}

export default App;
