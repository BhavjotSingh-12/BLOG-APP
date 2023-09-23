import './sidebar.css'
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'
const Sidebar = () => {
    const [cats, setcat] = useState([])

    useEffect(() => {


        const getcats = async () => {
            const res = await axios.get("/categories")
            setcat(res.data);
        }
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebaritem">
                <div className="sidebartitle">About Me</div>
                <img src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor, perspiciatis quia totam harum nobis!
                </p>
            </div>
            <div className="sidebaritem">
                <div className="sidebartitle">Categories</div>
                <ul className="sidedbarlist">
                    {cats.map((c) => {
                        <Link to={`/?cat=${c.name}`} className='"link'>
                            <li className="sidebarlistitem">{c.name}</li>
                        </Link>
                    })}
                </ul>
            </div>
            <div className="sidebaritem">
                <div className="sidebartitle">Follow Us</div>
                <div className="sidebarsocial">
                    <i className="sidebaricon fa-brands fa-square-facebook"></i>
                    <i className="sidebaricon fa-brands fa-square-twitter"></i>
                    <i className="sidebaricon fa-brands fa-square-instagram"></i>

                </div>
            </div>
        </div >
    )
}

export default Sidebar