import React from 'react';
import './login.css';
function Login() {
  return (
    <section className="login">
      <input
        type="text"
        placeholder="username"
        // onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        // onChange={(e) => setPassword(e.target.value)}
      />
      <button
      // onClick={handleClick}
      >
        Login
      </button>
    </section>
  );
}

export default Login;
