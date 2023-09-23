import Sidebar from './Sidebar'
import SinglePost from './SinglePost'
import './single.css'

const Single = () => {
    return (
        <div className='single'>
            <SinglePost />
            <Sidebar />
        </div>
    )
}

export default Single