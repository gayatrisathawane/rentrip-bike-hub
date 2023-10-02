import './Login.css'
import { useState } from 'react';
import showToast from 'crunchy-toast';
import LoginImage from "./login.png"
import Navbar from "./../../component/Navbar/Navbar";
import Footer from "./../../component/Footer/Footer";
const Login = () => {
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState('Male');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SaveLocalStorage=()=>{
        localStorage.setItem('byke',JSON.stringify())

    }

   



return (
    <>
        <Navbar />
        <div className='login-main'>


            <div className='login'>
                <div>
                    <img src={LoginImage} className='login-img' />
                </div>
                <div>
                    <form>

                        <div className="info p-5 mt-5">

                            <input type="mail"
                                className='text'
                                placeholder="Email"
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }} /><br />

                            <input type="password"
                                className='text'
                                placeholder="Password"
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }} /><br />
                            <button tpye="button"
                                onClick={showToast} className=' button'>Submit</button>
                            {
                                showToast('Login Successfully...!', 'success', 2000)
                            }
                        </div>
                    </form>
                </div>


            </div>


        </div>


        <Footer />
    </>

)
}
export default Login