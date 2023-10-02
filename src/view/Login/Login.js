import './Login.css'
import { useState } from 'react';
import showToast from 'crunchy-toast';
import LoginImage from "./login.png"
import Navbar from "./../../component/Navbar/Navbar";
import Footer from "./../../component/Footer/Footer";
const Login = () => {
    // const [taskList,setTaskList]=useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const addTaskList=()=>{
        const obj={
            email:email,
            password:password,
        }

    }
    // setTaskList([...taskList])


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
                                    value={email}
                                    placeholder="Enter Email"

                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                /><br />

                                <input type="password"
                                    className='text'
                                    value={password}
                                    placeholder="Enter Password"
                                    onChange={(e) => {
                                        setPassword(e.target.value)


                                    }}
                                /><br />
                                <button tpye="button"
                                    onClick={addTaskList} className='button'>Submit</button>

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











