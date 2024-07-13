import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with', { username, password });
  };

  return (
    <div>
      <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;