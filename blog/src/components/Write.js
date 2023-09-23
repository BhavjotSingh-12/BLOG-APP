import './write.css'
import { useState, useContext } from "react"
import axios from "axios"
import { Context } from './Context/Context'

const Write = () => {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const [file, setfile] = useState(null)
    const { user } = useContext(Context)
    const handlesubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename)
            data.append("file", file)
            newPost.photo = filename;
            try {
                await axios.post("/upload", data)
                console.log(data)
            } catch (err) {

            }
        }
        try {
            const res = await axios.post("/posts", newPost)
            window.location.replace("/post/" + res.data._id)
        } catch (err) {

        }
    }
    return (
        <div classname='write'>
            {file &&
                <img src={URL.createObjectURL(file)} className='writeimg' />
            }
            <form classname='writeform' onSubmit={handlesubmit}>
                <div className="writeformGroup">
                    <label htmlFor="fileinput">
                        <i class="writeicon fa-solid fa-plus"></i>
                    </label>
                    <input
                        type="file"
                        id='fileinput'
                        style={{ display: "none" }}
                        onChange={(e) => setfile(e.target.files[0])} />
                    <input
                        type="text"
                        placeholder='Title'
                        className='writeinput'
                        autofocus='true'
                        onChange={e => settitle(e.target.value)} />
                </div>
                <div className="writeformGroup">
                    <textarea
                        placeholder="Tell your story...."
                        types="text"
                        className="writeinput writetext"
                        onChange={e => setdesc(e.target.value)}>
                    </textarea>
                    <button className="submit" type="submit">Publish</button>
                </div>
            </form>
        </div>

    )
}

export default Write