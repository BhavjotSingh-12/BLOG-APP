import { useContext, useState } from 'react'
import Sidebar from './components/Sidebar'
import './settings.css'
import { Context } from './components/Context/Context'
import axios from "axios"

const Settings = () => {
    const [file, setfile] = useState(null)
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [success, setsuccess] = useState(false)

    const { user, dispatch } = useContext(Context)
    const PF = "http://localhost:4000/images/";

    const handlesubmit = async (e) => {
        dispatch({ type: "UPDATE_START" })
        e.preventDefault();
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename)
            data.append("file", file)
            updatedUser.profilePic = filename;
            try {
                await axios.post("/upload", data)
                console.log(data)
            } catch (err) {

            }
        }
        try {
            const res = await axios.put("/users/" + user._id, updatedUser);
            console.log(res)
            setsuccess(true)
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data })
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" })
        }
    }
    return (
        <div className='settings'>
            <div className="settingwrapper">
                <div className="settingtitle">
                    <span className="settingsupdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsform" onSubmit={handlesubmit}>
                    <label>Profile Picture</label>
                    <div className="settingPP">
                        <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} className='setimg' alt="" />
                        <label htmlFor="fileinput">
                            <i className="settingPPicon fa-regular fa-circle-user "></i>
                        </label>
                        <input
                            type="file"
                            id="fileinput"
                            style={{ display: "none" }}
                            onChange={(e) => setfile(e.target.files[0])} />
                    </div>
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder={user.username}
                        onChange={e => {
                            setusername(e.target.value)
                        }} />
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder={user.email}
                        onChange={e => {
                            setemail(e.target.value)
                        }} />
                    <label>Password</label>
                    <input
                        type="password"
                        onChange={e => {
                            setpassword(e.target.value)
                        }} />
                    <button className="setsubmit" type='submit'>Submit</button>
                    {success && <span style={{ color: "green", textAlign: "center", marginTop: "10px" }}>
                        Profile Updated Successfully
                    </span>}
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings