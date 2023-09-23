import './post.css'
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    // console.log(post._id)
    const PF = "http://localhost:4000/images/";

    return (
        <div className='post'>
            {post.photo && (
                <img
                    className='postimg'
                    src={PF + post.photo}
                    alt="" />
            )}
            <div className="postinfo">
                <div className="postcards">
                    {post.categories.map((c) => (
                        <span className="postcard">{c.name}</span>
                    ))}
                </div>

                <Link to={`/post/${post._id}`} className="link">
                    <span className="posttitle">{post.title}</span>
                </Link>
                <hr />
                <span className="postdate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postdescription">
                {post.desc}
            </p>
        </div>
    )
}

export default Post