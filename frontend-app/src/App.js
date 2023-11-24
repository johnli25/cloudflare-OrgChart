import logo from './logo.svg';
import './App.css';
// src/App.js
import React from 'react';
import OrganizationChart from './OrganizationChart';

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <h1>The Organization Chart</h1>
              <OrganizationChart /> {/* Use the component */}
          </header>
      </div>
  );
}

export default App;
