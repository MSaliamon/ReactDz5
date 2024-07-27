import React, { useState } from 'react';
import Header from './components/Header/Header';
import Cart from './pages/Cart'; 
import Login from './components/Login/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/Store';
import Menu from './pages/Menu';
import Order from './pages/Order';
import OrderDetails from './pages/OrderDetails';
import './index.css';
import './login.css';
import './menu.css';
function App() {
  const [userName, setUserName] = useState('');

  function handleLogin(name) {
    setUserName(name);
  }
  return (
    <Provider store={store}>
      <Router basename='/ReactDz5'>
        <div className="wrapper">
          <Header userName={userName} />
          <main className="content">
            <h1 className="title">
              The best pizza.<br />
              <span className="text-yellow">Straight out of the oven, straight to you.</span>
            </h1>
            <Routes>
              <Route path="/" element={!userName ? <Login onLogin={handleLogin} /> : <Navigate to="/menu" />} />
              <Route path="/menu" element={userName ? <Menu /> : <Navigate to="/" />} />
              <Route path="/cart" element={userName ? <Cart /> : <Navigate to="/" />} />
              <Route path="/order/new" element={userName ? <Order /> : <Navigate to="/" />} /> {/* Новий роут */}
              <Route path="/order/:id" element={userName ? <OrderDetails /> : <Navigate to="/" />} /> {/* Новий роут */}
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}
export default App;