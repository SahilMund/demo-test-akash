import React, { useState } from 'react';
import constants from '../../utils/constants';
import styles from './RegisterForm.module.css'; // Import the CSS module
import axios from 'axios';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/register', {
        name,
        email,
        password,
        phone,
      });
      // Clear the form
      setName('');
      setEmail('');
      setPassword('');
      setPhone('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.registerContainer}> {/* Apply class from module */}
      <div className={styles.formContainer}>
        <img src={constants.APP_LOGO} alt="app-logo" />
        <h2>Welcome </h2>
        <p className={styles.newDay}>
          Today is a new day. It's your day. You shape it.<br />Sign up to start ordering.
        </p>
        <form className={styles.signupForm} onSubmit={handleSubmit}>
          <label htmlFor="">Name</label><br />
          <input
            type="text"
            placeholder="e.g. John A"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          /><br />
          <label htmlFor="">Phone Number</label><br />
          <input
            type="text"
            placeholder="Enter your 10 digit mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          /><br />
          <label htmlFor="">Email</label><br />
          <input
            type="email"
            placeholder="Example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br />
          <label htmlFor="">Password</label><br />
          <input
            type="password"
            placeholder="At least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br />
          <button type="submit">Continue</button>
        </form>
        <p className={styles.signIn}>
          Already have an account? <a href="#">Sign in</a>
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={constants.WELCOME_IMAGE} alt="Delicious food" />
      </div>
    </div>
  );
};

export default RegisterForm;