// import './Login.css';
import './Loginpage.css'
import { useState } from 'react';
import showToast from 'crunchy-toast';
import Navbar from './../../component/Navbar/Navbar';

import Footer from './../../component/Footer/Footer';

import { Link } from 'react-router-dom'


const Login = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const addLogin = () => {
    if (!email && !password) {
      showToast(' Enter a email and password', 'alert', 5000);
    } else if (!validEmail(email)) {
      showToast(' Enter valid email', 'warning', 5000);
    }
    else {
      const loginData = {
        name,
        email,
        password,
      };
      localStorage.setItem('currentUser', JSON.stringify(loginData));
      showToast(' Successful loged in', 'success', 5000);
      window.location.href = "";
      setEmail('');
      setPassword('');
      setName('');
    }
  };

  const validEmail = (email) => {

    const emailSymbol = /[@]/;
    return emailSymbol.test(email);
  };
  return (
    <>
      <Navbar />

      <div className='login-main-container'>
        <div className='login-form-container'>
          <form>
            <div className=''>
              <h1 className='text-center'> Login</h1>


              {/* <div>
                    <button type="button" className='btn-facebook'>
                      <img src={Facebook} className='google-logo' />
                      With Facebook
                    </button>
                  </div> 

                  <div> 
                  
                    <button type="button" className='btn-google'>
                      <img src={Google} className='google-logo' />
                      With google
                    </button>
                  </div> */}

              <label className='fs-4'>Name</label>
              <input

                value={name}
                placeholder='Enter name'
                required
                className="form-control p-3 fs-5" type="text" aria-label="default input example"
                onChange={(e) => {
                  setName(e.target.value);
                  // setError(''); 
                }}
              />
              <label className='mt-3 fs-4'>Email</label>
              <input
                type='email'
                value={email}
                placeholder='Enter Email'
                className="form-control p-3 fs-5" aria-label="default input example"
                required

                onChange={(e) => {
                  setEmail(e.target.value);
                  // setError(''); 
                }}
              />
              <br />
              <label  className='fs-4'>Password</label>
              <input
                type='password'
                // className='text'
                value={password}
                required
                className="form-control p-3 fs-5" aria-label="default input example"
                placeholder='Enter Password'
                onChange={(e) => {
                  setPassword(e.target.value);
                  // setError(''); 
                }}
              />
              <br /><br></br>
              <div className='d-flex justify-content-between'>
                <div>
                <input type='checkbox' className=' fs-4' /> <span className='fs-3'>I'm not a robort</span>
                </div>
             <div>
            <p className=' fs-4'>Forgot Password?</p>
             </div>
             
              </div>
              <div>
                <button className="btn btn-login text-light p-2 fs-5" type="button" onClick={addLogin} >Login</button>
              </div>

              {/* <Link to="">
                <button type='button' onClick={addLogin} className='btn-login'>
                  Login
                </button>
              </Link> */}

            </div>
          </form>
          <Link to="/register"><p className='fs-4 text-decoration-none  text-center mt-3 text-light'>Register</p></Link>
        </div>

        {/* <div className='login-content col-md-6'>
            <img src={Logo1} className='login-image' />
            <h4 className='text-light m-4'>SIGNUP TODAY <br />And YOU'LL BE ABLE TO</h4>
            <p className='text-light'>✔️Online Trip Status</p>
            <p className='text-light'>✔️See Ready Hot Deals</p>
            <p className='text-light'>✔️Sign up to recive exclusive news and private offter</p>
            <p className='text-light'>✔️Quick Book Trips</p><br /><br />
            <Link to="/register">
              <button type='button' className='google ms-4 px-auto p-2'>Register Now!</button>
            </Link>
          </div> */}

      </div>

      <Footer />

    </>
  );
};
export default Login;
