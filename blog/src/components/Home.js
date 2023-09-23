import Header from './Header'
import Posts from './Posts'
import './home.css'
import Sidebar from './Sidebar'
import axios from "axios"
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from "react"

const Home = () => {
  const [posts, setposts] = useState([]);
  const {search} = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+search)
      setposts(res.data);
    }
    fetchPosts();
  }, [search])

  return (
    <div>
      <Header></Header>
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  )
}

export default Home