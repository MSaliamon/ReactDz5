import React from 'react';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import './index.css';
import './login.css';
import './menu.css';
import { pizzas } from './Data/data';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <h1 className="title">
          The best pizza.<br />
          <span className="text-yellow">Straight out of the oven, straight to you.</span>
        </h1>
        <p className="sub-title">👋 Welcome! Please start by telling us your name:</p>
        <Login />
        <Menu pizzas={pizzas} />
      </main>
    </div>
  );
}

export default App;