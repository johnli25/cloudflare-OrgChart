import './App.css';
import React from 'react';
import OrganizationChart from './OrganizationChart';

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <h1>The Organization Chart</h1>
              <OrganizationChart /> {/* Utilize component the component */}
          </header>
      </div>
  );
}

export default App;
