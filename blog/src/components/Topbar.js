import './topbar.css'
import nerd from "../Assets/nerd.png"
import { Link } from 'react-router-dom'
import { Context } from './Context/Context'
import { useContext } from 'react'

const Topbar = () => {
  const { user, dispatch } = useContext(Context)
  const PF = "http://localhost:4000/images/";
  const handlelogout = () => {
    dispatch({ type: "LOGOUT" })
  }
  return (
    <div className='top'>
      <div className="left">
        <i className="topicon fa-brands fa-square-facebook"></i>
        <i className="topicon fa-brands fa-square-twitter"></i>
        <i className="topicon fa-brands fa-square-instagram"></i>
      </div>
      <div className="center">
        <ul className="toplist">
          <Link to="/"><button className="toplistitem">Home</button></Link>
          <Link to="/Contact"><button className="toplistitem">Contact</button></Link>
          <Link to="/Write"><button className="toplistitem">Write</button></Link>
          <button className="toplistitem" onClick={handlelogout}>
            {user && "Logout"}
          </button>
        </ul>
      </div>
      <div className="right">
        <Link to="/settings">
          {
            user ? (
              <img src={PF + user.profilePic} className="nerd" alt="" />
            ) : 
              <>
                <Link to="/Login" ><button className=" toplistitem">Login</button></Link>
                <Link to="/register" ><button className=" toplistitem">Register</button></Link>
              </>
          }</Link>
        <i className="serachicon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default Topbar