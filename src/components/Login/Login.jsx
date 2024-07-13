import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

const Login = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`User's name: ${name}`);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <Input
        placeholder="Your full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button>Login</Button>
    </form>
  );
};

export default Login;