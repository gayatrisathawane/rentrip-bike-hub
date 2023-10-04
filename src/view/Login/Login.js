import './Login.css';
import { useState } from 'react';
import Facebook from "./../../component/Footer/facebook - Copy.png"
import Navbar from './../../component/Navbar/Navbar';
import Google from "./logo.png";
import Footer from './../../component/Footer/Footer';
import Logo1 from "./../../component/Navbar/logo-rentrip.png"


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  const addLogin = () => {
    if (!email || !password || !email && !password ) {
      alert('Please enter both email and password.');
    } else if (!validEmail(email)) {
      alert('Please enter a valid email address.');
    }
    else {
      const loginData = {
        email,
        password,
      };
      localStorage.setItem('currentUser', JSON.stringify(loginData));
      alert('Successfully logged in');
      setEmail('');
      setPassword('');
    }
  };

  const validEmail = (email) => {
   
    const emailSymbol = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailSymbol.test(email);
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

                  <button type="button" className=' m-2  facebook'>  <img src={Facebook} className=' google-logo ' />With Facebook</button>
                  <button type="button" className='fs-4 m-5  google'> <img src={Google} className='fs-5 google-logo' />With Google</button>
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
                      // setError(''); 
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
                      // setError(''); 
                    }}
                  />
                  <br /><br></br>
                  {/* {error && <p className='text-danger'>{error}</p>}   */}

                  <input type='checkbox' className=' fs-3' />I'm not a robort
                  <a href="" className='password fs-5'>Forgot Password?</a><br /><br />

                  <a href="">
                    <button type='button' onClick={addLogin} className='google m-5 px-5'>
                      Login
                    </button>
                  </a>


                </div>
              </form>
            </div>
          </div>
          <div className='login-content col-md-6'>
            <img src={Logo1} className='login-image' />
            <h4 className='text-light m-4'>SIGNUP TODAY <br />And YOU'LL BE ABLE TO</h4>
            <p className='text-light'>✔️Online Trip Status</p>
            <p className='text-light'>✔️See Ready Hot Deals</p>
            <p className='text-light'>✔️Sign up to recive exclusive news and private offter</p>
            <p className='text-light'>✔️Quick Book Trips</p><br /><br />
            <button type='button' className='google ms-4'>Register Now!</button>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;

