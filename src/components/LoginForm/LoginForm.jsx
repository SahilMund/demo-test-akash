import React, { useState } from 'react';
import constants from '../../utils/constants';
import styles from './LoginForm.module.css';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/login', {
        email,
        password,
      });

      setEmail('');
      setPassword('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formContainer}>
        <img src={constants.APP_LOGO} alt="app-logo" />
        <h2>Welcome Back</h2>
        <p className={styles.newDay}>
          Today is a new day. It's your day. You shape it.<br />
          Sign up to start ordering.
        </p>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <label htmlFor="">Email</label><br />
          <input
            type="email"
            placeholder="Example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.loginFormInput}
          />
          <br />
          <label htmlFor="">Password</label><br />
          <input
            type="password"
            placeholder="At least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.loginFormInput}
          />
          <br />
          <button type="submit" className={styles.continueButton}>
            Continue
          </button>
        </form>
        <p className={styles.signUp}>
          Don't you have an account? <a href="#">Sign up</a>
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={constants.WELCOME_IMAGE} alt="Delicious food" />
      </div>
    </div>
  );
};

export default LoginForm;