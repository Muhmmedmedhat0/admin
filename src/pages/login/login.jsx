import React, { useState } from 'react';
import './login.css';
import { logIn } from '../../app/slices/user';
import { useDispatch, useSelector } from 'react-redux';

function Login() {
  const dispatch = useDispatch();
  const { userInfo, loading } = useSelector((state) => state.user);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  // console.log(userInfo);
  const info = { email, password };
  function handleClick() {
    dispatch(logIn(info));
  }
  return (
    <section className="login">
      <input
        type="email"
        placeholder="email"
        required={true}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        required={true}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {userInfo ? <span className="error">{userInfo.message}</span> : ''}
      <button onClick={handleClick} disabled={loading}>
        Login
      </button>
    </section>
  );
}

export default Login;
