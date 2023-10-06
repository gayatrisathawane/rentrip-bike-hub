import './Login.css';
import { useState } from 'react';
import showToast from 'crunchy-toast';
import Facebook from "./../../component/Footer/facebook - Copy.png"
import Navbar from './../../component/Navbar/Navbar';
import Google from "./logo.png";
import Footer from './../../component/Footer/Footer';
import Logo1 from "./../../component/Navbar/logo-rentrip.png"
import { Link } from 'react-router-dom'

const Login = () => {
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
        email,
        password,
      };
      localStorage.setItem('currentUser', JSON.stringify(loginData));
      showToast(' Successful loged in', 'success', 5000);
      window.location.href = "";
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

      <div className='d-flex login-flex'>
        <div className='row login-media'>
          <div className='login col-md-6'>


            <div>
              <form>
                <h1 className='sign-text text-center mt-4 '> Login</h1>

                <div className='button-flex p-3'>

                  <div>
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
                  </div>

                </div><br/>

                <h3 className='ms-2 or-login'>-----------------or-----------------</h3>

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

                  <Link to="">
                    <button type='button' onClick={addLogin} className='google m-5 px-5'>
                      Login
                    </button>
                  </Link>
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
            <Link to="/register">
              <button type='button' className='google ms-4 px-auto p-2'>Register Now!</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Login;



// import './Register.css';
// import { useState } from 'react';
// import showToast from 'crunchy-toast';
// import Navbar from './../../component/Navbar/Navbar';
// import Footer from './../../component/Footer/Footer';
// import Logo from "./logo.png"
// import { Link } from 'react-router-dom'

// const Register = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [firstname, setFirstName] = useState('');
//     const [lastname, setLastName] = useState('');
//     const [device, setDevice] = useState('');
//     const [serialno, setSerialNo] = useState('')
//     const [age, setAge] = useState('')
//     const [mobileno, setMobileNo] = useState('')
//     const [modelno, setModelNo] = useState('')
//     const handleCheck = (e) => {
//         if (e.target.checked) {
//             setDevice([...device, e.target.value]);
//         }
//         else {
//             const indexToDeleted = device.indexOf(e.target.value)
//         }

//     }
//     const addRegister = () => {

//         if (!email && !password ) {
//             showToast(' Enter a Name email and password', 'alert', 5000);
//         }
//         else if (!firstname) {
//             showToast(' Enter a First Name', 'alert', 5000);
//         }
//         else if (!lastname) {
//             showToast(' Enter a Last Name', 'alert', 5000);

//         }
//         else if (!device) {
//             showToast(' Enter a Devices', 'alert', 5000);
//         }
//         else if (!serialno) {
//             showToast(' Enter a Serial No', 'alert', 5000);
//         }
//         else if (!mobileno) {
//             showToast(' Enter a Mobile No', 'alert', 5000);

//         }
//         else if (!age) {
//             showToast(' Enter a Age', 'alert', 5000);

//         }
//         else if (!modelno) {
//             showToast(' Enter a Model No', 'alert', 5000);

//         }
//         else if (!validEmail(email)) {
//             showToast(' Enter valid email', 'warning', 5000);
//         }



//         else {
//             const loginData = {
//                 email,
//                 password,
//                 lastname,
//                 lastname,
//                 device,
//                 serialno,
//                 mobileno,
//                 modelno,
//                 age,
//               };
//             localStorage.setItem('currentUser', JSON.stringify(loginData));
//             showToast(' Successful Register in', 'success', 5000);
//             window.location.href = "";
//             setEmail('');
//             setPassword('');
//             setFirstName('');
//             setLastName('');
//             setDevice('');
//             setSerialNo('');
//             setMobileNo('');
//             setModelNo('');
//             setAge('');
//              }
//     };
//     const validEmail = (email) => {
//         const emailSymbol = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailSymbol.test(email);
//     };
//     return (
//         <>
//             <Navbar />
//             <div className='register col-md-6'>

//                 <div >
//                     <div >
//                         <div className='register-data '>
//                             <h1 className=' text-center fs-1 mx-auto ms-5'>Bike Registration From</h1>
//                             <img src={Logo} className='register-image mb-5'></img>

//                         </div><br />
//                         <div className='px-5  text-center'>
//                             <form>
//                                 <input
//                                     type='text'
//                                     className='text px-4'
//                                     value={firstname}
//                                     placeholder='Enter First Name'
//                                     required

//                                     onChange={(e) => {
//                                         setFirstName(e.target.value);

//                                     }}
//                                 />
//                                 <input
//                                     type='text'
//                                     className='text px-4'
//                                     value={lastname}
//                                     required
//                                     placeholder='Enter Last Name'
//                                     onChange={(e) => {
//                                         setLastName(e.target.value);

//                                     }} /><br />

//                                 <input
//                                     type='email'
//                                     className='text px-4'
//                                     value={email}
//                                     placeholder='Enter Email'
//                                     required

//                                     onChange={(e) => {
//                                         setEmail(e.target.value);

//                                     }}
//                                 />

//                                 <input
//                                     type='mobile'
//                                     className='text px-4'
//                                     value={mobileno}
//                                     required
//                                     placeholder='Enter Mobile Number'
//                                     onChange={(e) => {
//                                         setMobileNo(e.target.value);

//                                     }}
//                                 /><br />

//                                    <input
//                                     type='age'
//                                     className='text px-4'
//                                     value={mobileno}
//                                     required
//                                     placeholder='Enter Age'
//                                     onChange={(e) => {
//                                         setAge(e.target.value);

//                                     }}
//                                 />
//                           </form>
//                             <h1 className='bike-info-text mt-5'>Bike Information</h1>
//                             <br />
//                             <div className='px-5  text-center mt-4'>
//                                 <input
//                                     type='text'
//                                     className='textregi px-4'
//                                     value={serialno}
//                                     placeholder='Enter Serial No'
//                                     required

//                                     onChange={(e) => {
//                                         setSerialNo(e.target.value);

//                                     }}
//                                 />
//                                 <input
//                                     type='mobile'
//                                     className='textregi px-4'
//                                     value={modelno}
//                                     required
//                                     placeholder='Enter Model'
//                                     onChange={(e) => {
//                                         setModelNo(e.target.value);

//                                     }}
//                                 /><br />
//                             </div><br /><br />
//                             <h3> Please indicate any identifying items on your bike : 
//                                 </h3>
//                             <div className='form-line '>


//                                 <input type="checkbox" value="bell"
//                                     onChange={handleCheck} />Bell<br />

//                                 <input type="checkbox" value="lights"
//                                     onChange={handleCheck} />Lights<br />

//                                 <input type="checkbox" value="basket"
//                                     onChange={handleCheck} />Basket<br />

//                                 <input type="checkbox" value="horn"
//                                     onChange={handleCheck} />Horn<br />

//                                 <input type="checkbox" value="botalholder"
//                                     onChange={handleCheck} />Botal Holder<br />

//                                 <input type="checkbox" value="other"
//                                     onChange={handleCheck} />Other<br />
//                             </div><br /><br />
//                             <input type="checkbox"
//                                 onChange={handleCheck} /> I certify that the bike I am registering belongs to me and was obtained legally. I understand that registering my bike through the school's cycling program is not a guarantee that my bike will be protected from theft or loss. I am responsible for providing updated contact information <br />


//                         </div>
//                         <form className='px-auto mx-auto'>
//                             <input type="date" className='ms-3 m-5 p-1' />

//                         </form>
//                         <Link to="">
//                             <button type='button' onClick={addRegister} className='google px-5'>
//                                 Submit
//                             </button>
//                         </Link>





//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     )
// }
// export default Register

// .register{
//   display: flex;
//   flex-direction: row;
//   box-shadow: 2px 4px 4px 5px lightgrey;
//   width: 800px;
//   /* height: 100vh; */
//   border-radius: 20px;
//   flex-wrap: wrap;
//  justify-content: center;
//  margin: 0 auto;
//  padding: 5px;
//  margin-top: 30px;
//  margin-bottom: 30px;
  
// }
// .form-line {
//   padding: 12px 10px;
//   display: flex;
//   justify-content: space-evenly;
//   font-size: 20px;
//   margin: 10px;
//   padding: 10px;
// }
// .bike-info-text{
//   color: white;
//   background-color:rgb(37, 37, 66) ;
//   margin: 10px;
//   padding: 10px;
  
// }

// .register-data{
//   background-color: rgb(246, 162, 7);
//   width:800px;
//   height: 200px;
//   margin-top: -3px;
//   border-radius: 20px;
//   color: white;
  
// }
// .login-main{
//   display: flex;
// }
// .register-image{
//  display: flex;
//  justify-content: center;
//  margin: auto;
//  height: 160px;

// }
// .text-center{
//   display: block;
//   justify-content: space-around;
// }
// .info{
//   font-size: 25px;
//  text-align: center;
//  padding: 5px;
// }
// .text{
//   margin: 10px;
//   padding: 4px;
//   font-size: 20px;
//   /* text-align: center; */

// }
// .facebook{
//   background-color: rgb(22, 22, 233);
//   color: white;
//   margin: 5px ;
//   padding: 2px;
//   position: relative;
//   bottom: 30px;
//   border-radius: 10px;
//   font-size: 20px;
//   border: none;

// }
// .or-login{
//   position: relative;
//   bottom: 50px;

// }
// .google-logo{
//   height: 35px;

// }
// .google{
//   background-color: orange;
//   color: white;
//   margin-left: 300px ;
//   padding: 12px;
//   font-size: 20px;
//   border-radius: 10px;
//   text-decoration: none;
 
// }
// .textregi {
//   margin: 14px;
//   font-size: 24px;
//   text-align: center;
// box-shadow:  1px 1px 1px rgb(120, 116, 116);
  
// }


// .password{
//   text-decoration: none;
//   margin-left: 30px;
//   color: orange;
// }

// @media screen and (max-width: 600px) {

//   .register-data {
//       background-color: rgb(246, 162, 7);
//       width: 540px;
//       height: 107px;
//       margin-left: 13px;
//       margin-top: -5px;
//       border-radius: 10px;
//       color: white;
//     }
//     .google {
//       background-color: orange;
//       color: white;
//       margin-left: 207px;
//       padding: 11px;
//         padding-right: 11px;
//         padding-left: 11px;
//       font-size: 14px;
//       border-radius: 10px;
//       text-decoration: none;
//     }
// .register-image {
//   display: flex;
//   justify-content: center;
//   margin: auto;
//     margin-bottom: auto;
//   height: 61px;
// }
// .text {
//   margin: 14px;
//   /* padding: -281px; */
//   font-size: 24px;
//   text-align: center;

// }
// .form-line {
//   padding: 12px 10px;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-evenly;
//   font-size: 20px;
//   margin: 10px;
//   padding: 10px;
// }
// .textregi {
//   margin: 14px;
//   /* padding: -281px; */
//   font-size: 24px;
//   text-align: center;
//   display: flex;
//   justify-content: center;
  
//   margin-right: 30px;
  
// }
// .register{
//   display: flex;
//   flex-direction: row;
//   box-shadow: 2px 4px 4px 5px lightgrey;
//   width: 540px;
//   /* height: 100vh; */
//   border-radius: 20px;
//   flex-wrap: wrap;
//  justify-content: center;
//  margin: 0 auto;
//  padding: 5px;
//  margin-top: 30px;
//  margin-bottom: 30px;
  
// }
// .bike-info-text {
//   color: white;
//   background-color: rgb(37, 37, 66);
//   margin: -14px;
//     margin-top: -14px;
//   padding: 5px;
//   text-align: center;
 
// }
// }