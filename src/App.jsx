import React, { useState } from 'react';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import { pizzas } from './Data/data';
import './index.css';
import './login.css';
import './menu.css';



function App() {
  const [userName, setUserName] = useState('');

  function handleLogin(name) {
    setUserName(name);
  }

  return (
    <div className="wrapper">
      <Header userName={userName} />
      <main className="content">
        <h1 className="title">
          The best pizza.<br />
          <span className="text-yellow">Straight out of the oven, straight to you.</span>
        </h1>
        {!userName ? (
          <>
            <p className="sub-title">👋 Welcome! Please start by telling us your name:</p>
            <Login onLogin={handleLogin} />
          </>
        ) : (
          <Menu />
        )}
      </main>
    </div>
  );
}

export default App;