import './Login.css';
import { useState } from 'react';
// import showToast from 'crunchy-toast';
import Facebook from "./../../component/Footer/facebook - Copy.png"
import Navbar from './../../component/Navbar/Navbar';
import Google from "./logo.png";
import Footer from './../../component/Footer/Footer';
import Logo1 from "./../../component/Navbar/logo-rentrip.png"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const addTaskList = () => {
    const loginData = {
      email,
      password,
    };
    localStorage.setItem('currentUser', JSON.stringify(loginData));
    alert('Successfully saved login data to localStorage');
    // showToast('This is a sample toast message', 'success', 3000);
    setEmail('');
    setPassword('');
  };
return (
    <>
      <Navbar />
      
      <div className='d-flex'> 
      <div className='row'>
        <div className='login col-md-6'>
        
        
          <div>
            <form>
            <h1 className='sign-text text-center mt-4 '> Sign in</h1>
            <div>
            
              <button type="button" className=' m-2  facebook'>  <img src={Facebook} className=' google-logo '/>With Facebook</button>
              <button type="button" className='fs-4 m-5  google'> <img src={Google} className='fs-5 google-logo'/>With Google</button>
              <h3 className='ms-5 or-login'>------------------or-----------------</h3>
            </div>
            
              <div className='info p-5 mt-5'>
                <input
                  type='email'
                  className='text'
                  value={email}
                  placeholder='Enter Email'
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  />
                <br />
                <input
                  type='password'
                  className='text'
                  value={password}
                  required
                  placeholder='Enter Password'
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <br /><br></br>
                
               <input type='checkbox' className=' fs-3'/>I'm not a robort
                <a href="" className='password fs-5'>Forgot Password?</a><br/><br/>
             
             <a href="">
             <button type='button' onClick={addTaskList} className='google m-5 px-5'>
               Login
                </button>
             </a>
               
               
              </div>
            </form>
          </div>
        </div>
        <div className='login-content col-md-6'>
          <img src={Logo1}  className='login-image'/>
          <h4 className='text-light m-4'>SIGNUP TODAY <br/>And YOU'LL BE ABLE TO</h4>
          <p className='text-light'>✔️Online Trip Status</p>
          <p className='text-light'>✔️See Ready Hot Deals</p>
          <p className='text-light'>✔️Sign up to recive exclusive news and private offter</p>
          <p className='text-light'>✔️Quick Book Trips</p><br/><br/>
          <button type='button' className='google ms-4'>Register Now!</button>

        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;










