import React from 'react';
import './login.css';
function Login() {
  return (
    <section className="login">
      <input type="email" placeholder="email" required={true} />
      <input required={true} type="password" placeholder="password" />
      <button>Login</button>
    </section>
  );
}

export default Login;
