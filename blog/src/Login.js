import { Link } from 'react-router-dom'
import './login.css'
import { useContext, useRef } from 'react'
import { Context } from './components/Context/Context';
import axios from "axios"

const Login = () => {
    const userRef = useRef();
    const passRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    const handlesubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passRef.current.value,
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };
    return (
        <div className='login'>
            <span className="logintitle">Login</span>
            <form className="loginform" onSubmit={handlesubmit} >
                <label>Username</label>
                <input
                    type="text"
                    className='logininput'
                    placeholder="Enter Your Username..."
                    ref={userRef} />
                <label>Password</label>
                <input
                    type="password"
                    className='logininput'
                    placeholder="Enter Your Password..."
                    ref={passRef}
                />
                <button className="loginbtn" type="submit" disabled={isFetching}>Login</button>
            </form>
            <Link to="/Register"><button className="registerloginbtn">Register</button></Link>
        </div>
    )
};

export default Login