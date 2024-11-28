import React ,{useState}from 'react'
import constants from '../utils/constants'
import '../styles/RegisterForm.css'
import axios from 'axios';

const RegisterForm = () => {

  const [ email , setEmail ] = useState('');
  const [ password , setPassword ] = useState('')
  const [ name , setName ] = useState('');
  const [ phone , setPhone ] = useState('')

  const handleSubmit = async (e) => {
    
    console.log("into handle submit register");
    e.preventDefault();
    try {
         await axios.post('http://localhost:3000/register', {
            name:name,
            email:email,
            password:password,
            phone:phone
          })
        // Clear the form
        setName('');
        setEmail('');
        setPassword('');
        setPhone('')
    } catch (err) {
        console.log(err);
        
    }
};
  return (
    <div className='register-container'>
        <div className="form-container">
            <img src={constants.APP_LOGO} alt="app-logo" />
            <h2>Welcome 👋</h2>
            <p className='new-day'>Today is a new day. It's your day. You shape it.<br />Sign up to start ordering.</p>
            <form className="signup-form" onSubmit={handleSubmit}>
                <label htmlFor="">Name</label><br/>
                <input 
                  type="text" 
                  placeholder="e.g. John A"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required  /><br />
                <label htmlFor="">Phone Number</label><br/>
                <input 
                  type="text" 
                  placeholder="Enter your 10 digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required  /> <br />
                <label htmlFor="">Email</label><br/>
                <input 
                  type="email" 
                  placeholder="Example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                 /><br />
                <label htmlFor="">Password</label><br/>
                <input 
                  type="password" 
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                 /><br />
                <button type="submit" >Continue</button>
            </form>
            <p className='sign-in'>Already have an account? <a href="#">Sign in</a></p>
        </div>
        <div className="image-container">
            <img src={constants.WELCOME_IMAGE} alt="Delicious food" />
        </div>
    </div>
  )
}

export default RegisterForm