import React ,{ useState }from 'react'
import constants from '../utils/constants'
import '../styles/LoginForm.css'
import axios from 'axios';

const LoginForm = () => {
  const [ email , setEmail ] = useState('');
  const [ password , setPassword ] = useState('')

  const handleSubmit = async (e) => {
    console.log("into handle submit login");
    
        e.preventDefault();
        try {
             await axios.post('http://localhost:3000/login', {
                email,
                password
            });

            setEmail('');
            setPassword('');
        } catch (err) {
            console.log(err);
            
        }
    }; 

  return (
    <div className='login-container'>
        <div className="form-container">
            <img src={constants.APP_LOGO} alt="app-logo" />
            <h2>Welcome Back👋</h2>
            <p className='new-day'>Today is a new day. It's your day. You shape it.<br />Sign up to start ordering.</p>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="">Email</label><br/>
                <input 
                  type="email" 
                  placeholder="Example@gmail.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required /><br />
                <label htmlFor="">Password</label><br/>
                <input 
                  type="password" 
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required  /><br />
                <button type="submit" className="continue-button">Continue</button>
            </form>
            <p className='sign-up'>Don't you have an account? <a href="#">Sign up</a></p>
        </div>
        <div className="image-container">
            <img src={constants.WELCOME_IMAGE} alt="Delicious food" />
        </div>
    </div>
  )
}

export default LoginForm