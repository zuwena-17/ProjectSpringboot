import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:8080/api/v1/logins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName: username, password: password }),
    });

    if (response.ok) {
      navigate('/dashboard');
    } else {
      const errorMessage = await response.text();
      setError(errorMessage);
    }
  };

  return (
    <div className='container'>
      <div className='form'>
        <h1>Login Page</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label className='label'>Username<br /></label>
          <input type='text'placeholder='Enter your Username' name='Username' requiredclassName='label1' value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br /><br />

          <label className='label'>Password<br /></label>
          <input type='password' placeholder='Enter your Password' name='Password'required className='label1'value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br /><br />

          <button className='button' type='submit'>Login</button>
        </form>
       
      </div>
    </div>
  );
}

export default Login;
