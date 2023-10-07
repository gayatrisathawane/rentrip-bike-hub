import './Register.css';
import registerimg from './../../view/Login/bg-login.jpg'
import { useState } from 'react';
import showToast from 'crunchy-toast';
import Navbar from './../../component/Navbar/Navbar';
import Footer from './../../component/Footer/Footer';
import Logo from "./logo.png"
import { Link } from 'react-router-dom'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    // const [device, setDevice] = useState('');
    const [serialno, setSerialNo] = useState('')
    const [age, setAge] = useState('')
    const [mobileno, setMobileNo] = useState('')
    const [modelno, setModelNo] = useState('')
    const handleCheck = (e) => {
        //     if (e.target.checked) {
        //         setDevice([...device, e.target.value]);
        //     }
        //     else {
        //         const indexToDeleted = device.indexOf(e.target.value)
        //     }

        // }
        const addRegister = () => {

            if (!email && !password) {
                showToast(' Enter a Name email and password', 'alert', 5000);
            }
            else if (!firstname) {
                showToast(' Enter a First Name', 'alert', 5000);
            }
            else if (!lastname) {
                showToast(' Enter a Last Name', 'alert', 5000);

            }
            // else if (!device) {
            //     showToast(' Enter a Devices', 'alert', 5000);
            // }
            // else if (!serialno) {
            //     showToast(' Enter a Serial No', 'alert', 5000);
            // }
            else if (!mobileno) {
                showToast(' Enter a Mobile No', 'alert', 5000);

            }
            else if (!age) {
                showToast(' Enter a Age', 'alert', 5000);

            }
            // else if (!modelno) {
            //     showToast(' Enter a Model No', 'alert', 5000);

            // }
            else if (!validEmail(email)) {
                showToast(' Enter valid email', 'warning', 5000);
            }
            else {
                const loginData = {
                    email,
                    password,
                    lastname,
                    lastname,
                    // device,
                    // serialno,
                    mobileno,
                    age,

                };
                localStorage.setItem('currentUser', JSON.stringify(loginData));
                showToast(' Successful Register in', 'success', 5000);
                window.location.href = "";
                setEmail('');
                setPassword('');
                setFirstName('');
                setLastName('');
                // setDevice('');
                // setSerialNo('');
                setMobileNo('');
                setAge('');

            }
        };
        const validEmail = (email) => {
            const emailSymbol = /[@]/;
            return emailSymbol.test(email);
        };
        return (
            <>
                <Navbar />
                <div className='main-register-container'>
                    <div className='register col-md-6'>

                        <h1 className='text-center fs-1 mx-auto ms-5'> Registration From</h1>

                        <div className=' text-center'>
                            <form>
                                <label className='mt-3 fs-4'>First Name : </label>
                                <input
                                    type='text'
                                    className='text px-5'
                                    value={firstname}
                                    placeholder='Enter First Name'
                                    required

                                    onChange={(e) => {
                                        setFirstName(e.target.value);
                                    }}
                                /><br />
                                <label className='mt-3 fs-4'>Last Name : </label>
                                <input
                                    type='text'
                                    className='text px-5'
                                    value={lastname}
                                    required
                                    placeholder='Enter Last Name'
                                    onChange={(e) => {
                                        setLastName(e.target.value);

                                    }} /><br />

                                <label className='mt-3 fs-4'>Email : </label>

                                <input
                                    type='email'
                                    className='text px-5'
                                    value={email}
                                    placeholder='Enter Email'
                                    required

                                    onChange={(e) => {
                                        setEmail(e.target.value);

                                    }}
                                /><br />
                                <label className='mt-3 fs-4'>Password : </label>

                                <input
                                    type='password'
                                    className='text px-5'
                                    value={password}
                                    required
                                    placeholder='Enter Mobile Number'
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                /><br />

                                <label className='mt-3 fs-4'>Mobile Number : </label>

                                <input
                                    type='mobile'
                                    className='text px-4'
                                    value={mobileno}
                                    required
                                    placeholder='Enter Mobile Number'
                                    onChange={(e) => {
                                        setMobileNo(e.target.value);

                                    }} /><br />

                                <label className='mt-3 fs-4'>Age : </label>

                                <input
                                    type='mobile'
                                    className='text px-4'
                                    value={age}
                                    required
                                    placeholder='Enter Age'
                                    onChange={(e) => {
                                        setAge(e.target.value);

                                    }} />

                                {/* <input
                                    type='mobile'
                                    className='text px-4'
                                    value={mobileno}
                                    required
                                    placeholder='Enter Mobile Number'
                                    onChange={(e) => {
                                        setMobileNo(e.target.value);

                                    }} />

                                <input
                                    type='mobile'
                                    className='text px-4'

                                    required
                                    placeholder='Enter Mobile Number'
                                    onChange={(e) => {
                                        setMobileNo(e.target.value);

                                    }} /> */}
                                <br />
                            </form>
                        </div>
                        <button type='button' onClick={addRegister} className='btn-register px-5'>
                            Register
                        </button>



                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
    export default Register