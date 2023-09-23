import { Link, useLocation } from 'react-router-dom'
import './singlepost.css'
import { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { Context } from './Context/Context'

const SinglePost = () => {
    const { user } = useContext(Context)
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const [updatemode, setupdatemode] = useState(false)
    const PF = "http://localhost:4000/images/";
    const handleupdate = async () => {
        try {
            const res = await axios.put(`/posts/${post._id}`,
                { username: user.username, title, desc })
            // window.location.reload()
            setupdatemode(false)

        } catch (err) {

        }
    }

    const location = useLocation()
    const path = (location.pathname.split("/")[2])
    const [post, setpost] = useState({})
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            console.log(res);
            setpost(res.data);
            settitle(res.data.title)
            setdesc(res.data.desc)
        }
        getPost();
    }, [path])

    const handleclick = async () => {
        try {
            const res = await axios.delete(`/posts/${post._id}`, { data: { username: user.username } })
            window.location.replace("/")

        } catch (err) {

        }
    }
    return (
        <div className='singlepost'>
            <div className="singlepostwrapper">
                {post.photo &&

                    <img src={PF + post.photo} alt="" className="singlepostimg" />
                }
                {
                    updatemode ? <input
                        type="text"
                        value={title}
                        className='singleposttitleinput'
                        autoFocus
                        onChange={(e) => settitle(e.target.value)} /> : (

                        <h1 className="singleposttitle">
                            {title}
                            {post.username === user?.username && (
                                <div className="singlepostedit">
                                    <i className="singleposticon fa-regular fa-pen-to-square"
                                        onClick={() => {
                                            setupdatemode(true)
                                        }}></i>
                                    <i className="singleposticon fa-regular fa-trash-can" onClick={handleclick}></i>
                                </div>
                            )}
                        </h1>
                    )
                }
                <div className="singlepostinfo">
                    <span className='singlepostauth'>
                        Author:
                        <Link to={`/?user=${post.username}`} className='link'>
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className='singlepostdate'>{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updatemode ? <textarea className='singlepostdescinput'
                    value={desc} onChange={(e) => setdesc(e.target.value)} /> : (
                    <p className="singlepostdesc">
                        {desc}
                    </p>
                )}
                {updatemode && (

                    <button className="singlebtn"
                        onClick={handleupdate}>Update</button>
                )}
            </div>
        </div>
    )
}

export default SinglePost