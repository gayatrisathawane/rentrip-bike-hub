import './Register.css';
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
    const [device, setDevice] = useState('');
    const [serialno, setSerialNo] = useState('')
    const [age, setAge] = useState('')
    const [mobileno, setMobileNo] = useState('')
    const [modelno, setModelNo] = useState('')
    const handleCheck = (e) => {
        if (e.target.checked) {
            setDevice([...device, e.target.value]);
        }
        else {
            const indexToDeleted = device.indexOf(e.target.value)
        }

    }
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
        else if (!device) {
            showToast(' Enter a Devices', 'alert', 5000);
        }
        else if (!serialno) {
            showToast(' Enter a Serial No', 'alert', 5000);
        }
        else if (!mobileno) {
            showToast(' Enter a Mobile No', 'alert', 5000);

        }
        else if (!age) {
            showToast(' Enter a Age', 'alert', 5000);

        }
        else if (!modelno) {
            showToast(' Enter a Model No', 'alert', 5000);

        }
        else if (!validEmail(email)) {
            showToast(' Enter valid email', 'warning', 5000);
        }



        else {
            const loginData = {
                email,
                password,
                lastname,
                lastname,
                device,
                serialno,
                mobileno,
                modelno,
                age,
            };
            localStorage.setItem('currentUser', JSON.stringify(loginData));
            showToast(' Successful Register in', 'success', 5000);
            window.location.href = "";
            setEmail('');
            setPassword('');
            setFirstName('');
            setLastName('');
            setDevice('');
            setSerialNo('');
            setMobileNo('');
            setModelNo('');
            setAge('');
        }
    };
    const validEmail = (email) => {
        const emailSymbol = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailSymbol.test(email);
    };
    return (
        <>
            <Navbar />
            <div className='register col-md-6'>

                <div >
                    <div >
                        <div className='register-data '>
                            <h1 className=' text-center fs-1 mx-auto ms-5'>Bike Registration From</h1>
                            <img src={Logo} className='register-image mb-5'></img>

                        </div><br />
                        <div className='px-5  text-center'>
                            <form>
                                <input
                                    type='text'
                                    className='text px-4'
                                    value={firstname}
                                    placeholder='Enter First Name'
                                    required

                                    onChange={(e) => {
                                        setFirstName(e.target.value);

                                    }}
                                />
                                <input
                                    type='text'
                                    className='text px-4'
                                    value={lastname}
                                    required
                                    placeholder='Enter Last Name'
                                    onChange={(e) => {
                                        setLastName(e.target.value);

                                    }} /><br />

                                <input
                                    type='email'
                                    className='text px-4'
                                    value={email}
                                    placeholder='Enter Email'
                                    required

                                    onChange={(e) => {
                                        setEmail(e.target.value);

                                    }}
                                />

                                <input
                                    type='mobile'
                                    className='text px-4'
                                    value={mobileno}
                                    required
                                    placeholder='Enter Mobile Number'
                                    onChange={(e) => {
                                        setMobileNo(e.target.value);

                                    }}
                                /><br />

                                <input
                                    type='age'
                                    className='text px-4'
                                    value={mobileno}
                                    required
                                    placeholder='Enter Age'
                                    onChange={(e) => {
                                        setAge(e.target.value);

                                    }}
                                />
                            </form>
                            <h1 className='bike-info-text mt-5'>Bike Information</h1>
                            <br />
                            <div className='px-5  text-center mt-4'>
                                <input
                                    type='text'
                                    className='textregi px-4'
                                    value={serialno}
                                    placeholder='Enter Serial No'
                                    required

                                    onChange={(e) => {
                                        setSerialNo(e.target.value);

                                    }}
                                />
                                <input
                                    type='mobile'
                                    className='textregi px-4'
                                    value={modelno}
                                    required
                                    placeholder='Enter Model'
                                    onChange={(e) => {
                                        setModelNo(e.target.value);

                                    }}
                                /><br />
                            </div><br /><br />
                            <h3> Please indicate any identifying items on your bike :
                            </h3>
                            <div className='form-line '>


                                <input type="checkbox" value="bell"
                                    onChange={handleCheck} />Bell<br />

                                <input type="checkbox" value="lights"
                                    onChange={handleCheck} />Lights<br />

                                <input type="checkbox" value="basket"
                                    onChange={handleCheck} />Basket<br />

                                <input type="checkbox" value="horn"
                                    onChange={handleCheck} />Horn<br />

                                <input type="checkbox" value="botalholder"
                                    onChange={handleCheck} />Botal Holder<br />

                                <input type="checkbox" value="other"
                                    onChange={handleCheck} />Other<br />
                            </div><br /><br />
                            <input type="checkbox"
                                onChange={handleCheck} /> I certify that the bike I am registering belongs to me and was obtained legally. I understand that registering my bike through the school's cycling program is not a guarantee that my bike will be protected from theft or loss. I am responsible for providing updated contact information <br />


                        </div>
                        <form className='px-auto mx-auto'>
                            <input type="date" className='ms-3 m-5 p-1' />

                        </form>
                        <Link to="">
                            <button type='button' onClick={addRegister} className='google px-5'>
                                Submit
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Register