// src/App.js
import React from 'react';
import './App.css';
import BrandsTable from './BrandsTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Brand Leaderboard</h1>
      </header>
      <BrandsTable />
    </div>
  );
}

export default App;
