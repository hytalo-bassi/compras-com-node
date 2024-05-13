import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <nav>
        <span>comno</span>
        <ol>
          <li>home</li>
          <li>compras</li>
          <li>painel</li>
        </ol>
      </nav>
      <div className="App">
        <Outlet />
      </div>
    </>
  );
}

export default App;
