import { useState } from 'react';
import dragDrop from './components/dragDrop'; // Adjust the path if necessary
import './App.css';

function App() {
  return (
    <>
      <h1>File Upload Dashboard</h1>
      <dragDrop/>
    </>
  );
}

export default App;
