import { Link } from 'react-router-dom'
import './register.css'
import { useState } from 'react'
import axios from "axios"

const Register = () => {
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [error, seterror] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        seterror(false)
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password
            });
            console.log(res)
            res.data && window.location.replace("/login");
        } catch (err) {
            seterror(true);
        }
    }
    return (
        <div className='register'>
            <span className="registertitle">Register</span>
            <form className="registerform" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    className='registerinput'
                    placeholder="Enter Your Username..."
                    onChange={e => setusername(e.target.value)} />
                <label>Email</label>
                <input
                    type="text"
                    className='registerinput'
                    placeholder="Enter Your Email..."
                    onChange={e => setemail(e.target.value)} />
                <label>Password</label>
                <input
                    type="password"
                    className='registerinput'
                    placeholder="Enter Your Password..."
                    onChange={e => setpassword(e.target.value)} />
                <button className="registerbtn" type="submit"
                    style={{ marginTop: "20px", backgroundColor: "teal" }}>Register</button>
            </form>
            <Link to="/Login">
                <button className="registerloginbtn">Login</button>
            </Link>
            {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong...</span>}
        </div>
    )
}

export default Register