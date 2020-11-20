import React, { useState } from 'react';
import Layout from './components/layout';
import Header from './components/header';
import NavBar from './components/nav';
import EmployeeList from './components/employeeList';
import Footer from './components/footer';
import employees from './data/employeedb.json'

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>
  );
}

export default App;
