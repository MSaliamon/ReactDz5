import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
function Login({ onLogin }) {
  const [name, setName] = useState('');
  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  const handleLoginClick = (e) => {
    e.preventDefault();
    if (name) {
      onLogin(name);
    }
  };
  return (
    <form className="login-form">
      <Input type="text" placeholder="Your full name" value={name} onChange={handleInputChange} />
      <Button onClick={handleLoginClick}>Login</Button>
    </form>
  );
}
export default Login;